import { defineConfig } from 'tsup';
import fs from 'fs';

// The options here is derived from CLI flags.
export default defineConfig((options) => ({
  entry: ['lib/index.js'],
  publicDir: './lib',
  outDir: 'dist', // <--- defaults to dist
  bundle: false,
  // minify: true, // <--- You can minify the output, resulting into lower bundle sizes.
  // sourcemap: true, // <-- If you don't minify you don't need sourcemaps! This will emit a ./dist/index.js.map.
  splitting: true, // <--- defaults to true. Code splitting currently only works with the esm output format.
  format: ['esm'], // <-- If package.json type is set to module, the filenames are: [.js,.cjs], else: [.mjs, .js].
  clean: true, // <--- Should clean output directory before each build?
  treeshake: true, // <--- esbuild has tree shaking enabled by default, but sometimes it's not working very well, so tsup offers an additional option to let you use Rollup for tree shaking instead. This flag will enable Rollup for tree shaking.
  // dts: true, // <--- Generate declaration file, meaning a index.d.ts.
  // target: , // <--- The value for target defaults to compilerOptions.target in your tsconfig.json, or node14 if unspecified. For more information check out esbuild's target option.
  // env: process.NODE_ENV,
  async onSuccess() {
    const readStreamPackageJson = fs.createReadStream('./package.json');
    const writeStreamPackageJson = fs.createWriteStream('./dist/package.json');
    const readStreamReadmeMd = fs.createReadStream('./README.md');
    const writeStreamReadmeMd = fs.createWriteStream('./dist/README.md');

    readStreamPackageJson.pipe(writeStreamPackageJson);
    readStreamReadmeMd.pipe(writeStreamReadmeMd);

    console.log('DONE !!!');
    // return () => { cleanupFunction() }
  },
}));
