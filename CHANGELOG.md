# @talkohavy/lodash

## 1.4.1

### Patch Changes

- `wrapInThrottle` refactored.
- Updated the README.md file.

## 1.4.0

### Minor Changes

- The function `wrapInDebounce` now supports async callbacks, and also a return type.

## 1.3.6

### Patch Changes

- Exporting types now from main index.ts file.

## 1.3.5

### Patch Changes

- Removed option to import not from root. We no longer support importing like so: `import { isObject } from '@talkohavy/lodash/isObject';`.

## 1.3.4

### Patch Changes

- type in shipped package.json is now commonjs (not module). Consuming projects can now have correct types.

## 1.3.3

### Patch Changes

- Switvhed to rollup bundler to bundle for both esm & cjs with types included.

## 1.3.2

### Patch Changes

- Supporting both commonjs & es6 now. Consuming this package can either be using import or require. If using import, types can be imported directly. If using require, you can import types using jsdoc.

## 1.3.1

### Patch Changes

- first time building with experience

## 1.3.0

### Minor Changes

- 3a82cf5: new typescript version of the package

## 1.2.1

### Patch Changes

- 352c7e2: wrapInThrottle outerArgs should be optional

## 1.2.0

### Minor Changes

- 33a5ae7: Project converted to typescript

## 1.1.7

### Patch Changes

- 0ff52da: removed the nesting of dist from package.json

## 1.1.6

### Patch Changes

- 668ddd3: Remove .changeset from final published build (copying .npmignore file as well into dist)

## 1.1.5

### Patch Changes

- b7c783b: Changeset is now working along side the cd dist approach

## 1.1.4

### Patch Changes

- d34f04b: changed the way we do publish now

## 1.1.3

### Patch Changes

- 9876dac: cleaner dist folder

## 1.1.2

### Patch Changes

- 4298dff: don't include src

## 1.1.1

### Patch Changes

- 7ebab7e: added cs script to package.json

## 1.1.0

### Minor Changes

- 654e89a: Added a changeset with which i'll use to add change logs
