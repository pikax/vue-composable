if (__VUE_2__) {
  jest.mock("./utils", () => jest.requireActual("./utils.2"));

  jest.mock("@vue/runtime-core", () =>
    jest.requireActual("@vue/composition-api")
  );
}
