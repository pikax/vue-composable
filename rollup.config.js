import resolve from "rollup-plugin-node-resolve";
import sourceMaps from "rollup-plugin-sourcemaps";
import camelCase from "lodash.camelcase";
import typescript from "rollup-plugin-typescript2";
import json from "rollup-plugin-json";
import replace from "rollup-plugin-replace";
import { terser } from "rollup-plugin-terser";

const pkg = require("./package.json");

const libraryName = pkg.name;

const config = {
  umd: {
    name: camelCase(pkg.name),
    globals: {
      "@vue/composition-api": "vueCompositionApi"
    }
  }
};

function createConfig(format, isDev, minify) {
  const { name, globals } = config[format] || {};

  const isProd = isDev !== false;
  const file = `dist/${pkg.name}.${format}${isProd ? ".prod" : ""}${
    minify ? ".min" : ""
  }.js`;

  return {
    input: "src/index.ts",
    output: {
      file,
      name,
      format,
      globals
    },
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: ["vue", "@vue/composition-api", 'axios'],

    watch: {
      include: "src/**"
    },
    plugins:
      [
        // Allow json resolution
        json(),
        // Compile TypeScript files
        typescript({
          tsconfigOverride: {
            exclude: ["__tests__"]
          }
        }),

        replace({
          values: {
            __VERSION__: `"${pkg.version}"`,
            __DEV__:
              format !== "umd"
                ? 'process.env.NODE_ENV !== "production"'
                : (!isProd).toString(),
            __JSDOM__: "false"
          }
        }),

        // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
        // commonjs(),
        // Allow node_modules resolution, so you can use 'external' to control
        // which external modules to include in the bundle
        // https://github.com/rollup/rollup-plugin-node-resolve#usage
        resolve(),

        // Resolve source maps to the original source
        sourceMaps(),

        isProd &&
          minify &&
          terser({
            module: /^esm/.test(format)
          })
      ] || []
  };
}

export default [
  createConfig("umd", false),
  createConfig("umd", true),

  createConfig("cjs", false),
  createConfig("es", false),
];
