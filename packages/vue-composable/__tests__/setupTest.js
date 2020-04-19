if (__VUE_2__) {
  jest.mock("./utils", () => jest.requireActual("./utils.2"));
  jest.mock("./../src/api", () => jest.requireActual("./../src/api.2"));
} else {
  jest.mock("./../src/api", () => jest.requireActual("./../src/api.3"));
}
