const path = require("path");
const fs = require("fs-extra");
const { buildAll, buildTargets } = require("./build");

async function buildTo2() {
  try {
    console.log("renaming files", buildTargets);
    for (const target of buildTargets) {
      const pkgDir = path.resolve(`packages/${target}`);
      await fs.rename(`${pkgDir}/src/api.ts`, `${pkgDir}/src/api.3.ts`);
      await fs.rename(`${pkgDir}/src/api.2.ts`, `${pkgDir}/src/api.ts`);
    }

    await buildAll(buildTargets);
  } finally {
    console.log("renaming files back", buildTargets);
    for (const target of buildTargets) {
      const pkgDir = path.resolve(`packages/${target}`);
      await fs.rename(`${pkgDir}/src/api.ts`, `${pkgDir}/src/api.2.ts`);
      await fs.rename(`${pkgDir}/src/api.3.ts`, `${pkgDir}/src/api.ts`);
    }
  }
}

// async function run(package, cb) {
//   try{

//     await cb();
//   }
//   finally {

//   }
// }

buildTo2();
