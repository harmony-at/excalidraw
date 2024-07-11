const { execSync } = require("child_process");

const excalidrawDir = 'E:/harmonyAT/novacde/excalidraw';
const excalidrawPackage = 'E:/harmonyAT/novacde/excalidraw/packages/excalidraw/package.json';
const pkg = require(excalidrawPackage);

console.log(excalidrawDir);
const publish = () => {
  try {
    execSync(`yarn  --frozen-lockfile`);
    execSync(`yarn --frozen-lockfile`, { cwd: excalidrawDir });
    execSync(`yarn run build:umd`, { cwd: excalidrawDir });
    // execSync(`yarn --cwd ${excalidrawDir} publish`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const release = () => {
  publish();
  console.info(`Published ${pkg.version}!`);
};

release();
