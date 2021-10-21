// based on https://github.com/antfu/vue-demi/blob/060127b7ededfb2ab64e909f08787504c083df60/scripts/postinstall.js

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const dir = path.resolve(__dirname, "..");
const agent = (process.env.npm_config_user_agent || "npm").split("/")[0];
const userRoot = path.resolve(dir, "../..");

const AgentCommands = {
  npm: "npm i",
  yarn: "yarn add",
  pnpm: "pnpm add",
  cnpm: "cnpm i",
};

function loadModule(name) {
  try {
    return require(name);
  } catch (e) {
    return undefined;
  }
}

function installModules(names) {
  const command = AgentCommands[agent] || AgentCommands.npm;
  names = Array.isArray(names) ? names : [names];
  execSync(`${command} ${names.join(" ")}`, {
    stdio: "inherit",
    cwd: userRoot,
  });
}

function switchPeerdependencies(version) {
  const pkg = require(`${dir}/package.json`);
  pkg.peerDependencies = pkg["peerDependencies" + version];
  return fs.writeFileSync(
    `${dir}/package.json`,
    JSON.stringify(pkg, undefined, 2)
  );
}

function switchVersion(version) {
  const dist = path.join(dir, "dist");
  const versionPath = path.join(dist, `v${version}`);

  try {
    // local dev
    if (!fs.existsSync(versionPath)) {
      return;
    }
    const files = fs.readdirSync(versionPath);

    files.forEach((f) => {
      const dfile = path.join(dist, f);
      try {
        // pnpm fix
        fs.unlinkSync(dfile);
      } catch (_) {}
      fs.copyFileSync(path.join(versionPath, f), dfile);
    });

    switchPeerdependencies(version);
  } catch {
    console.error("[vue-composable] error switching version");
  }
}

const Vue = loadModule("vue");

if (!Vue || typeof Vue.version !== "string") {
  console.warn(
    "[vue-composable] Vue is not detected in the dependencies. Please install Vue first."
  );
} else if (Vue.version.startsWith("2.")) {
  const VCA = loadModule("@vue/composition-api");
  if (!VCA) {
    installModules(["@vue/composition-api"]);
  }
  switchVersion(2);
} else if (Vue.version.startsWith("3.")) {
  switchVersion(3);
} else {
  console.warn(
    `[vue-composable] Vue version v${Vue.version} is not suppported.`
  );
}
