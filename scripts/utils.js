// from https://github.com/vuejs/vue-next/blob/master/scripts/utils.js
const fs = require("fs");
const chalk = require("chalk");

const targets = (exports.targets = fs
  .readdirSync("packages")
  .filter(f => fs.statSync(`packages/${f}`).isDirectory())
  .map(f => {
    try {
      const pkg = require(`../packages/${f}/package.json`);
      if (pkg.private && !pkg.buildOptions) {
        return false;
      }
      return {
        package: f,
        priority: pkg.buildOptions.priority || 99
      };
    } catch (e) {
      console.error(e);
      return false;
    }
  })
  .filter(x => x !== false)
  .sort((a, b) => a.priority - b.priority)
  .map(x => x.package));

exports.fuzzyMatchTarget = (partialTargets, includeAllMatching) => {
  const matched = [];
  partialTargets.forEach(partialTarget => {
    for (const target of targets) {
      if (target.match(partialTarget)) {
        matched.push(target);
        if (!includeAllMatching) {
          break;
        }
      }
    }
  });
  if (matched.length) {
    return matched;
  } else {
    console.log();
    console.error(
      `  ${chalk.bgRed.white(" ERROR ")} ${chalk.red(
        `Target ${chalk.underline(partialTargets)} not found!`
      )}`
    );
    console.log();

    process.exit(1);
  }
};
