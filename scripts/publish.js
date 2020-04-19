const fs = require("fs-extra");
const path = require("path");
const args = require("minimist")(process.argv.slice(2));
const assert = require("assert");
const execa = require("execa");
const { prompt } = require("enquirer");

const { targets: allTargets } = require("./utils");

const { build, resolvePkgDir } = require("./build");

const targets = args._;
const buildTargets = targets.length > 0 ? targets : allTargets;

async function publish(package, targetVersion) {
  assert([2, 3].includes(targetVersion));

  const pkgDir = resolvePkgDir(package);
  await build(package, targetVersion);
  const pkg = require(`${pkgDir}/package.json`);

  const currentMinor = +pkg.version.split(".").slice(-1);
  const majorVersion = pkg.version.split("-")[0];

  const tag = targetVersion === 3 ? "next" : false;
  const tempVersion = targetVersion === 3 ? "alpha" : "dev";

  const version = `${majorVersion}-${tempVersion}.${currentMinor}`;

  pkg.version = version;
  await fs.writeFile(`${pkgDir}/package.json`, JSON.stringify(pkg, null, 2));

  try {
    const args = ["publish", "--access public"];
    if (tag) {
      args.push(`--tag ${next}`);
    }

    const otp = await prompt({
      type: "input",
      name: "otp",
      message: "OTP"
    });

    args.push(`--otp`, otp.otp);

    await execa("npm", ["publish", "--access public", tag && `--tag ${next}`], {
      stdio: "inherit",
      cwd: pkgDir
    });
  } catch (e) {
    console.error(e);
    return process.exit(1);
  }
}

async function run() {
  const versions = [2, 3];

  for (const version of versions) {
    for (const target of buildTargets) {
      await publish(target, version);
    }
  }
}

// publish("vue-composable", 3);

run();
