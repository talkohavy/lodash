import fs from 'fs';
import os from 'os';
import { globSync } from 'glob';

const outFolderName = 'dist';
const sortAlphabetically = (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase());

postBuild();

async function postBuild() {
  generateNewIndexDtsFile();

  console.log('DONE !!!');
}

function generateNewIndexDtsFile() {
  console.log('- Step 2: generate new index.d.ts file');
  // Step 1: grab all .d.ts files, but don't look in node_modules
  const dtsFiles = globSync([`${outFolderName}/*.d.ts`], {
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
      `Must be at least 1 *.d.ts file...\nAre you sure that an output folder named "${outFolderName}" folder exists?`,
    );

  fs.writeFileSync(`${outFolderName}/index.d.ts`, updatedIndexDts);

  console.log('-- Generated new index.d.ts file successfully!');
}
