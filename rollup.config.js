import fs from "fs";
import path from "path";
import ts from "rollup-plugin-typescript2";
import replace from "@rollup/plugin-replace";
import json from "@rollup/plugin-json";
import resolvePlugin from "@rollup/plugin-node-resolve";

if (!process.env.TARGET) {
  throw new Error("TARGET package must be specified via --environment flag.");
}

const packagesDir = path.resolve(__dirname, "packages");
const packageDir = path.resolve(packagesDir, process.env.TARGET);
const name = path.basename(packageDir);
const resolve = p => path.resolve(packageDir, p);
const pkg = require(resolve(`package.json`));
const packageOptions = pkg.buildOptions || {};

const knownExternals = fs.readdirSync(packagesDir);

// ensure TS checks only once for each build
let hasTSChecked = false;

const configs = {
  "esm-bundler": {
    file: resolve(`dist/${name}.esm-bundler.js`),
    format: `es`
  },
  cjs: {
    file: resolve(`dist/${name}.cjs.js`),
    format: `cjs`
  },
  global: {
    file: resolve(`dist/${name}.global.js`),
    format: `iife`,
    globals: {
      "@vue/composition-api": "vueCompositionApi",
      "@vue/runtime-core": "VueRuntimeCore",
      axios: "axios",
      vue: "Vue"
    }
  },
  esm: {
    file: resolve(`dist/${name}.esm.js`),
    format: `es`,
    external: ["vue", "@vue/composition-api", "axios"]
  }
};

const setup = {
  global: {
    external: ["vue", "@vue/composition-api", "axios", "@vue/runtime-core"],
    plugins: [
      resolvePlugin({
        // mainFields: [
        //   'browser'
        // ]
        // modulesOnly: true,
        // only: "@vue-composable/core",
        // dedupe: ["vue", "@vue/composition-api"]
      })
    ]
  }
};

const defaultFormats = ["esm-bundler", "cjs"];
const inlineFormats = process.env.FORMATS && process.env.FORMATS.split(",");
const packageFormats =
  inlineFormats || packageOptions.formats || defaultFormats;
const packageConfigs = process.env.PROD_ONLY
  ? []
  : packageFormats.map(format =>
      createConfig(
        configs[format],
        configs[format].plugins || [],
        setup[format] || {}
      )
    );

if (process.env.NODE_ENV === "production") {
  packageFormats.forEach(format => {
    if (format === "cjs" && packageOptions.prod !== false) {
      packageConfigs.push(createProductionConfig(format));
    }
    if (format === "global" || format === "esm") {
      packageConfigs.push(createMinifiedConfig(format));
    }
  });
}

export default packageConfigs;

function createConfig(output, plugins = [], config = {}) {
  output.externalLiveBindings = false;

  const isProductionBuild =
    process.env.__DEV__ === "false" || /\.prod\.js$/.test(output.file);
  const isGlobalBuild = /\.global(\.prod)?\.js$/.test(output.file);
  const isBundlerESMBuild = /\.esm-bundler\.js$/.test(output.file);
  const isRawESMBuild = /esm(\.prod)?\.js$/.test(output.file);
  const isRuntimeCompileBuild = /vue\./.test(output.file);

  if (isGlobalBuild) {
    output.name = packageOptions.name;
  }

  const shouldEmitDeclarations =
    process.env.TYPES != null &&
    process.env.NODE_ENV === "production" &&
    !hasTSChecked;

  const tsPlugin = ts({
    check: process.env.NODE_ENV === "production" && !hasTSChecked,
    tsconfig: path.resolve(__dirname, "tsconfig.json"),
    cacheRoot: path.resolve(__dirname, "node_modules/.rts2_cache"),
    tsconfigOverride: {
      compilerOptions: {
        declaration: shouldEmitDeclarations,
        declarationMap: shouldEmitDeclarations
      },
      exclude: ["**/__tests__", "test-dts"]
    }
  });
  // we only need to check TS and generate declarations once for each build.
  // it also seems to run into weird issues when checking multiple times
  // during a single build.
  hasTSChecked = true;

  return {
    ...config,
    input: resolve(`src/index.ts`),
    // Global and Browser ESM builds inlines everything so that they can be
    // used alone.
    external:
      isGlobalBuild || isRawESMBuild
        ? config.external || []
        : knownExternals.concat(
            Object.keys(pkg.dependencies || []).concat(
              Object.keys(pkg.peerDependencies || []) || []
            )
          ),
    plugins: [
      ...(config.plugins || []),

      json({
        namedExports: false
      }),
      tsPlugin,
      createReplacePlugin(
        isProductionBuild,
        isBundlerESMBuild,
        (isGlobalBuild || isRawESMBuild) &&
          !packageOptions.enableNonBrowserBranches,
        isRuntimeCompileBuild
      ),
      ...plugins
    ],
    output
  };
}

function createReplacePlugin(
  isProduction,
  isBundlerESMBuild,
  isBrowserBuild,
  isRuntimeCompileBuild
) {
  return replace({
    __COMMIT__: `"${process.env.COMMIT}"`,
    __VERSION__: `"${process.env.VERSION}"`,
    __DEV__: isBundlerESMBuild
      ? // preserve to be handled by bundlers
        `(process.env.NODE_ENV !== 'production')`
      : // hard coded dev/prod builds
        !isProduction,
    __SSR__: isBrowserBuild
      ? false
      : isBundlerESMBuild
      ? `(process.env.SSR === 'true')`
      : true,
    // this is only used during tests
    __TEST__: isBundlerESMBuild ? `(process.env.NODE_ENV === 'test')` : false,
    // If the build is expected to run directly in the browser (global / esm builds)
    __BROWSER__: isBrowserBuild,
    // support compile in browser?
    __RUNTIME_COMPILE__: isRuntimeCompileBuild,
    // support options?
    // the lean build drops options related code with buildOptions.lean: true
    "process.env.NODE_ENV": isBundlerESMBuild
      ? `process.env.NODE_ENV`
      : "'production'",

    __VUE_2__: process.env.VUE_VERSION === "2"
  });
}

function createProductionConfig(format) {
  return createConfig(
    {
      file: resolve(`dist/${name}.${format}.prod.js`),
      format: configs[format].format
    },
    configs[format].plugins || [],
    setup[format] || {}
  );
}

function createMinifiedConfig(format) {
  const { terser } = require("rollup-plugin-terser");
  return createConfig(
    {
      ...configs[format],
      file: resolve(`dist/${name}.${format}.prod.js`),
      format: configs[format].format
    },
    [
      ...(configs[format].plugins || []),
      terser({
        module: /^esm/.test(format)
      })
    ],
    setup[format] || {}
  );
}
