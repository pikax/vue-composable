import {
  Ref,
  ref,
  onUnmounted,
  isRef,
  watch,
  onMounted
} from "@vue/composition-api";
import {
  RefTyped,
  isString,
  unwrap,
  wrap,
  isElement,
  isClient,
  NO_OP
} from "@vue-composable/core";

/**
 * The values a CSS variable can contain.
 */
export type CssVariable = string | null;

/**
 * Additional methods.
 */
export interface CssVariablesMethods {
  /**
   * Stops the observation.
   */
  stop: () => void;

  /**
   * Resumes the observation.
   */
  resume: () => void;

  /**
   * current observing state
   */
  observing: Ref<boolean>;

  supported: boolean;
}

/**
 * API to assign a value to the css variable
 */
export interface CssVarDefinition {
  name: string;
  value: RefTyped<string>;
}

/**
 * Possible configuration
 */
export type CssVarDef = CssVarDefinition | string;

/**
 * Returns object. Consists of multiple pairs of key/CSS variable value references and the additional methods.
 */
export type UseCssVariables<T> = CssVariableObject<T> & CssVariablesMethods;

/**
 * The CSS variable return object. Each value is a `Ref` of a CSS variable's contents.
 */
export type CssVariableObject<T> = Record<keyof T, Ref<CssVariable>>;

/**
 * A CSS Variable configuration object. Each value must be a CSS variable without the leading dashes.
 */
export type CssVariableConfigurationObject = Record<string, CssVarDef>;

/**
 * Gets the current value of the given CSS variable name for the given element.
 *
 * @param element The element to get the variable for.
 * @param name The CSS variable name.
 */
export function getCssVariableFor(
  element: HTMLElement,
  name: string
): CssVariable {
  const result = getComputedStyle(element).getPropertyValue(name);
  return result ? result.trim() : null;
}

/**
 * Sets the value of the given CSS variable for the given element.
 *
 * @param element The element to set the variable for.
 * @param name The CSS variable name without dashes.
 * @param value The CSS variable value.
 */
export function setCssVariableFor(
  element: HTMLElement,
  name: string,
  value: CssVariable
): void {
  element.style.setProperty(name, value);
}

const defaultOptions: MutationObserverInit = {
  attributes: true,
  childList: true,
  attributeFilter: ["style"]
};

const sanitizeCssVarName = (name: string) => {
  if (name.length <= 2 || name[0] !== "-" || name[1] !== "-") {
    return `--${name}`;
  }
  return name;
};

/**
 *
 * @param variables
 * @param element
 */
export function useCssVariables<T extends CssVariableConfigurationObject>(
  variables: T
): UseCssVariables<T>;
export function useCssVariables<T extends CssVariableConfigurationObject>(
  variables: T,
  options?: MutationObserverInit
): UseCssVariables<T>;
export function useCssVariables<T extends CssVariableConfigurationObject>(
  variables: T,
  element: RefTyped<HTMLElement>,
  options?: MutationObserverInit
): UseCssVariables<T>;
export function useCssVariables<T extends CssVariableConfigurationObject>(
  variables: T,
  elementOrOptions?: RefTyped<HTMLElement> | MutationObserverInit,
  optionsConfig?: MutationObserverInit
): UseCssVariables<T> {
  const supported = isClient && "MutationObserver" in self;

  const [element, options] =
    isRef(elementOrOptions) || isElement(elementOrOptions)
      ? [elementOrOptions, optionsConfig || defaultOptions]
      : [
          (supported && document.documentElement) || ({} as any),
          elementOrOptions || defaultOptions
        ];

  // Reactive property to tell if the observer is listening
  const observing = ref(true);

  // Stores the results by reference.
  const result = {} as CssVariableObject<T>;

  // If the element is ref, we should only update the variable on mount
  const updateValues: Function[] = [];

  // extract name
  const defEntries: Array<[keyof T, string]> = Object.entries(variables).map(
    (x: [keyof T, CssVarDef]) => {
      const [name, value] = isString(x[1]) ? [x[1]] : [x[1].name, x[1].value];

      if (value) {
        updateValues.push(() =>
          setCssVariableFor(unwrap(element), name, unwrap(value))
        );
        // if is ref, use provided ref instead
        result[x[0]] = wrap(value);
      }

      return [x[0], sanitizeCssVarName(name)];
    }
  );

  for (let i = 0; i < defEntries.length; i++) {
    const [key, name] = defEntries[i];

    if (!result[key]) {
      // if is ref set null, onMount we will update
      result[key] = ref(
        (isRef(element) && !element.value) || !supported
          ? null
          : getCssVariableFor(unwrap(element), name as string)
      );
    }

    if (supported) {
      // keep track of changes
      watch(
        [result[key], wrap(element)] as any,
        (val: [CssVariable, HTMLElement]) => {
          if (!observing) return;
          if (val) {
            setCssVariableFor(val[1], name as string, val[0]);
          } else {
            // todo remove?
          }
        },
        { lazy: isRef(element) }
      );
    }
  }

  if (!supported) {
    return {
      ...result,

      stop: NO_OP,
      resume: NO_OP,
      supported,
      observing
    };
  }

  const update = () => {
    // Each time an observation has been made,
    // we look up for each CSS variable and update their values.
    for (let i = 0; i < defEntries.length; i++) {
      const [key, value] = defEntries[i];

      result[key].value = getCssVariableFor(unwrap(element), value);
    }
  };

  // Sets up the observer.
  const observer = new MutationObserver(update);

  // Sets the `stop` method.
  const stop = () => {
    observer.disconnect();
    observing.value = false;
  };

  // Sets the `start` method.
  const resume = () => {
    // if it was stopped we will update the variables to the current value
    if (!observing.value) {
      update();
    }
    observer.observe(unwrap(element), options);
    observing.value = true;
  };

  // Stops on destroy
  onUnmounted(stop);

  if (isRef(element)) {
    onMounted(() => {
      updateValues.forEach(x => x());
      watch(element, (n, o) => {
        if (o) {
          stop();
        }
        if (n) {
          resume();
        }
      });
    });
  } else if (isClient || element) {
    updateValues.forEach(x => x());
    // Starts observe
    resume();
  }

  return {
    ...result,

    supported,

    resume,
    stop,
    observing
  };
}
