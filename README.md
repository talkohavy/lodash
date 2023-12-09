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

### All functions

#### addItemToList

```js
import { addItemToList } from '@talkohavy/lodash';

const oldArray = ['danny', 'lisa'];
const newItem = 'john';

const newArr = addItemToList({ list: oldArr, newItem });

console.log(newArr); // <--- ['danny', 'lisa', john]
```

#### areObjectsEqual

```js
import { areObjectsEqual } from '@talkohavy/lodash';

const obj1 = { name: 'John', foo: 'bar' };
const obj2 = { foo: 'bar', name: 'John' };

const areEqual = areObjectsEqual(obj1, obj2);

console.log(areEqual); // <--- true
```

#### isEmpty

```js
import { isEmpty } from '@talkohavy/lodash';

const obj1 = {};
const isItEmpty1 = isEmpty(obj1);
console.log(isItEmpty1); // <--- true

const obj2 = { name: 'John' };
const isItEmpty2 = isEmpty(obj2);
console.log(isItEmpty2); // <--- false

const arr1 = [];
const isItReally3 = isObject(arr1);
console.log(isItReally3); // <--- true

const arr2 = ['john'];
const isItReally4 = isObject(arr2);
console.log(isItReally4); // <--- true
```

#### isNullish

```js
import { isNullish } from '@talkohavy/lodash';

const value1 = null;
const isItEmpty1 = isNullish(value1);
console.log(isItEmpty1); // <--- true

const value2 = undefined;
const isItEmpty2 = isNullish(value2);
console.log(isItEmpty2); // <--- true

const value3 = 'this could be string number boolean array function or an object';
const isItEmpty3 = isNullish(value3);
console.log(isItEmpty3); // <--- false
```

#### isObject

```js
import { isObject } from '@talkohavy/lodash';

const obj = {};
const isItReally1 = isObject(obj);
console.log(isItReally1); // <--- true

const arr = [];
const isItReally2 = isObject(arr);
console.log(isItReally2); // <--- true

const value1 = null;
const isItReally3 = isObject(value1);
console.log(isItReally3); // <--- false

const value2 = 'i am a string';
const isItReally4 = isObject(value2);
console.log(isItReally4); // <--- false
```

## License

[MIT](LICENSE)

[npm-url]: https://npmjs.com/package/@talkohavy/lodash
[npm-version-image]: https://badge.fury.io/js/@talkohavy%2Flodash.svg
