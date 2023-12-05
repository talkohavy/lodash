# @talkohavy/lodash

Lightweight, fast, useful functions that every [Node.js](http://nodejs.org) project needs.

[![NPM Version][npm-version-image]][npm-url]

## Features

This package exposes the following functions:

- `addItemToList`
- `areObjectsEqual`
- `decodeBase64`
- `deepMerge`
- `encodeBase64`
- `getArrMaxValue`
- `isNullish`
- `isObjEmpty`
- `isObject`
- `removeItemFromList`
- `removeItemFromListByIndex`
- `replaceItemOnListWith`
- `times`
- `wrapInDebounce`
- `wrapInThrottle`

## Installation

Using npm:

```bash
npm install @talkohavy/lodash
```

Using pnpm:

```bash
pnpm add @talkohavy/lodash
```

Using yarn:

```bash
yarn add @talkohavy/lodash
```

## How to use

Here's a code example of how to use the package:

```js
import { isObject } from '@talkohavy/lodash';

const obj = {};

console.log(isObject(obj));
```

You can even import particular parts to keep your bundle size small:

```js
import { isObject } from '@talkohavy/lodash/isObject';

const obj = {};

console.log(isObject(obj));
```

## License

[MIT](LICENSE)

[npm-url]: https://npmjs.com/package/@talkohavy/lodash
[npm-version-image]: https://badge.fury.io/js/@talkohavy%2Flodash.svg
