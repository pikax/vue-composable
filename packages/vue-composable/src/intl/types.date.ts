export type IntlDateTimeFormatOptions = Intl.DateTimeFormatOptions & {
  // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
  dateStyle: "full" | "long" | "medium" | "short";
  timeStyle: "full" | "long" | "medium" | "short";

  calendar: IntlDateTimeCalendarType;
  dayPeriod: "narrow" | "short" | "long";

  numberingSystem: IntlDateTimeNumberingSystem;

  weekday: "narrow" | "short" | "long";
  era: "narrow" | "short" | "long";
  year: "numeric" | "2-digit";
  month: "numeric" | "2-digit" | "narrow" | "short" | "long";
  day: "numeric" | "2-digit";
  hour: "numeric" | "2-digit";
  minute: "numeric" | "2-digit";
  second: "numeric" | "2-digit";
  timeZoneName: "short" | "long";

  // Time zone to express it in
  //   timeZone: "Asia/Shanghai";
  // Force 12-hour or 24-hour
  hour12: true | false;

  // Rarely-used options
  hourCycle: "h11" | "h12" | "h23" | "h24";
  formatMatcher: "basic" | "best fit";
};

export type IntlDateTimeCalendarType =
  | "buddhist"
  | "chinese"
  | "coptic"
  | "ethiopia"
  | "ethiopic"
  | "gregory"
  | "hebrew"
  | "indian"
  | "islamic"
  | "iso8601"
  | "japanese"
  | "persian"
  | "roc";

export type IntlDateTimeNumberingSystem =
  | "arab"
  | "arabext"
  | "bali"
  | "beng"
  | "deva"
  | "fullwide"
  | "gujr"
  | "guru"
  | "hanidec"
  | "khmr"
  | "knda"
  | "laoo"
  | "latn"
  | "limb"
  | "mlym"
  | "mong"
  | "mymr"
  | "orya"
  | "tamldec"
  | "telu"
  | "thai"
  | "tibt";
