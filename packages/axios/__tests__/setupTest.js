if (__VUE_2__) {
  // jest.mock("./utils", () => jest.requireActual("./utils.2"));
  jest.mock("./../src/api", () => jest.requireActual("./../src/api.2"));

  jest.mock("@vue/runtime-core", () =>
    jest.requireActual("@vue/composition-api")
  );
}
