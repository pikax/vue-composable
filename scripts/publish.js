const fs = require("fs-extra");
const path = require("path");
const args = require("minimist")(process.argv.slice(2));
const assert = require("assert");
const execa = require("execa");
const { prompt } = require("enquirer");

const { targets: allTargets } = require("./utils");

const { build, removeFiles } = require("./build");

const targets = args._;
const dry = args.dry;
const buildTargets = targets.length > 0 ? targets : allTargets;

async function publish(package) {
  const mainPkg = require(path.resolve("package.json"));
  const version = mainPkg.version;
  const tag = args.tag;
  const pkgDir = path.resolve(`packages/${package}`);
  try {
    const args = ["publish", "--access public"];
    args.push(`--new-version`, version);
    if (tag) {
      args.push("--tag", tag);
    }

    console.log("publishing for ", package, version, tag || "", args);
    if (dry) {
      console.log("`dry` flag - skipping");
      return;
    }

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
  if (!dry) {
    // generate changelog
    await execa(`yarn`, ["changelog"]);
  }

  // publish packages
  console.log("\nPublishing packages...");
  const versions = [2, 3];

  for (const version of versions) {
    for (const target of buildTargets) {
      await build(target, version);

      // fs.remove(path.resolve(`packages/${target}/scripts/postinstall.js`));
      await fs.copyFile(
        "./scripts/postinstall.js",
        path.resolve(`packages/${target}/scripts/postinstall.js`)
      );
    }
  }

  const mainPkg = require(path.resolve("package.json"));
  const targetVersion = mainPkg.version;

  // remove files from 'dist' folder and `peerDependencies`, this folder will be fixed by the `postinstall`
  for (const target of buildTargets) {
    const pkgDir = path.resolve(`packages/${target}`);
    const pkg = require(`${pkgDir}/package.json`);
    delete pkg.peerDependencies;
    pkg.version = mainPkg.version;
    await fs.writeFile(`${pkgDir}/package.json`, JSON.stringify(pkg, null, 2));

    await removeFiles(path.resolve(`packages/${target}/dist`));

    await publish(target);
  }
  if (dry) {
    return;
  }

  const { stdout } = await execa("git", ["diff"], { stdio: "pipe" });
  if (stdout) {
    console.log("\nCommitting changes...");
    await execa("git", ["add", "-A"]);
    await execa("git", ["commit", "-m", `release: v${targetVersion}`]);
  } else {
    console.log("No changes to commit.");
  }

  // push to GitHub
  console.log("\nPushing to GitHub...");
  await execa("git", ["tag", `v${targetVersion}`]);
  await execa("git", ["push", "origin", `refs/tags/v${targetVersion}`]);
  await execa("git", ["push"]);
}

run();
