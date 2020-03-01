import { Ref, ref, onUnmounted } from "@vue/composition-api";

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
   * Gets the current value of the given CSS variable name for the given element.
   *
   * @param name The CSS variable name.
   * @param element The element to get the variable for.
   */
  get: (name: string, element: HTMLElement) => CssVariable;

  /**
   * Sets the value of the given CSS variable for the given element.
   *
   * @param name The CSS variable name without dashes.
   * @param value The CSS variable value.
   * @param element The element to set the variable for.
   */
  set: (name: string, value: CssVariable, element: HTMLElement) => void;
}

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
export type CssVariableConfigurationObject = Record<string, string>;

/**
 * Gets the current value of the given CSS variable name for the given element.
 *
 * @param element The element to get the variable for.
 * @param name The CSS variable name.
 */
export function getVariableFor(
  name: string,
  element: HTMLElement = document.documentElement
): CssVariable {
  const result = getComputedStyle(element).getPropertyValue(`--${name}`);
  return result ? result.trim() : null;
}

/**
 * Sets the value of the given CSS variable for the given element.
 *
 * @param element The element to set the variable for.
 * @param name The CSS variable name without dashes.
 * @param value The CSS variable value.
 */
export function setVariableFor(
  name: string,
  value: CssVariable,
  element: HTMLElement = document.documentElement
): void {
  element.style.setProperty(`--${name}`, value);
}

/**
 *
 * @param variables
 * @param element
 */
export function useCssVariables<T extends CssVariableConfigurationObject>(
  variables: Record<keyof T, string>,
  element: HTMLElement = document.documentElement
): UseCssVariables<T> {
  // Reactive property to tell if the observer is listening
  const listening = ref(true);

  // Stores the results by reference.
  const result: CssVariableObject<T> = {} as any;

  // Assign variables to the result record.
  for (const key in variables) {
    result[key] = ref<CssVariable>(null);
  }

  // Sets up the observer.
  const observer = new MutationObserver(() => {
    // Each time an observation has been made,
    // we look up for each CSS variable and update their values.
    for (const key in variables) {
      result[key].value = getVariableFor(variables[key], element);
    }
  });

  // Sets the `stop` method.
  const stop = () => {
    observer.disconnect();
    listening.value = false;
  };

  // Sets the `start` method.
  const start = () => {
    observer.observe(element, {
      attributes: true,
      childList: true,
      subtree: true
    });
    listening.value = true;
  };

  // Starts observing
  start();

  // Stops on destroy
  onUnmounted(() => stop());

  return {
    ...result,
    get: getVariableFor,
    set: setVariableFor,
    resume: start,
    stop,
    listening
  };
}
