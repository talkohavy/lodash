import fs, { cpSync } from 'fs';
import os from 'os';
import { globSync } from 'glob';

const outDirName = 'dist';
const sortAlphabetically = (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase());

postBuild();

async function postBuild() {
  generateNewIndexDtsFile();

  copyReadmeFile();

  copyAndManipulatePackageJsonFile();

  copyChangesetDirectory();

  copyNpmIgnore();

  console.log('DONE !!!');
}

function generateNewIndexDtsFile() {
  console.log('- Step 2: generate new index.d.ts file');
  // Step 1: grab all .d.ts files, but don't look in node_modules
  const dtsFiles = globSync([`${outDirName}/*.d.ts`], {
    ignore: 'node_modules/**',
    signal: AbortSignal.timeout(500), // <--- pass in a signal to cancel the glob walk
    withFileTypes: true,
  });

  console.log('-- Found', dtsFiles.length, '*.d.ts files.');

  const updatedIndexDts = dtsFiles
    // @ts-ignore
    .toSorted(sortAlphabetically)
    .reduce((acc, { name }) => `${acc}export * from './${name.match(/.+(?=\.d\.ts)/)}';${os.EOL}`, '');

  if (!dtsFiles.length)
    throw new Error(
      `Must be at least 1 *.d.ts file...\nAre you sure that an output folder named "${outDirName}" folder exists?`,
    );

  fs.writeFileSync(`${outDirName}/index.d.ts`, updatedIndexDts);

  console.log('-- Generated new index.d.ts file successfully!');
}

/**
 * @description
 * Copy README file as-is to the output folder.
 */
function copyReadmeFile() {
  console.log('- Step 3: copy the README.md file');
  const readStreamReadmeMd = fs.createReadStream('./README.md');
  const writeStreamReadmeMd = fs.createWriteStream(`./${outDirName}/README.md`);
  readStreamReadmeMd.pipe(writeStreamReadmeMd);
}

function copyAndManipulatePackageJsonFile() {
  console.log('- Step 4: copy & manipulate the package.json file');
  // Step 1: get the original package.json file
  const packageJson = JSON.parse(fs.readFileSync('./package.json').toString());

  // Step 2: Remove all scripts
  delete packageJson.scripts;
  console.log('-- deleted `scripts` key');

  // Step 3: Change from private to public
  delete packageJson.private;
  packageJson.publishConfig.access = 'public';
  console.log('-- changed from private to public');
  console.log('-- changed publishConfig access to public');

  // Step 4: create new package.json file in the output folder
  fs.writeFileSync(`./${outDirName}/package.json`, JSON.stringify(packageJson));
  console.log('-- package.json file written successfully!');
}

function copyChangesetDirectory() {
  console.log('- Step 5: copy the .changeset directory');
  cpSync('.changeset', `${outDirName}/.changeset`, { recursive: true });
}

function copyNpmIgnore() {
  console.log('- Step 6: copy the .npmignore file');
  cpSync('.npmignore', `${outDirName}/.npmignore`);
}
