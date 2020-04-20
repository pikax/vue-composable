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

  const mainPkg = require(path.resolve("package.json"));

  const pkgDir = resolvePkgDir(package);
  await build(package, targetVersion);
  const pkg = JSON.parse(fs.readFileSync(`${pkgDir}/package.json`)); // require(`${pkgDir}/package.json`);

  const currentMinor = +mainPkg.version.split(".").slice(-1);
  const majorVersion = mainPkg.version.split("-")[0];

  const tag = targetVersion === 3 ? "next" : false;
  const tempVersion = targetVersion === 3 ? "alpha" : "dev";

  const version = `${majorVersion}-${tempVersion}.${currentMinor}`;

  pkg.version = version;
  await fs.writeFile(`${pkgDir}/package.json`, JSON.stringify(pkg, null, 2));

  try {
    const args = ["publish", "--access public"];
    args.push(`--new-version`, version);
    if (tag) {
      args.push("--tag", tag);
    }

    console.log("publishing for ", package, version, tag || "", args);

    const otp = await prompt({
      type: "input",
      name: "otp",
      message: "Enter OTP"
    });

    args.push(`--otp`, otp.otp);

    await execa("yarn", args, {
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

run();
