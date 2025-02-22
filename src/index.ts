import { addItemToList, type AddItemToListProps } from './addItemToList.js';
import { areObjectsEqual } from './areObjectsEqual.js';
import { decodeBase64 } from './decodeBase64.js';
import { deepMerge } from './deepMerge.js';
import { encodeBase64 } from './encodeBase64.js';
import { getArrMaxValue, type GetArrMaxValueProps } from './getArrMaxValue.js';
import { isEmpty } from './isEmpty.js';
import { isNullish } from './isNullish.js';
import { isObject } from './isObject.js';
import { removeItemFromList, type RemoveItemFromListProps } from './removeItemFromList.js';
import { removeItemFromListByIndex, type RemoveItemFromListByIndexProps } from './removeItemFromListByIndex.js';
import { replaceItemOnListWith, type ReplaceItemOnListWithProps } from './replaceItemOnListWith.js';
import { times, type TimesProps } from './times.js';
import { wrapInDebounce } from './wrapInDebounce.js';
import { wrapInThrottle } from './wrapInThrottle.js';

export type {
  AddItemToListProps,
  GetArrMaxValueProps,
  RemoveItemFromListProps,
  RemoveItemFromListByIndexProps,
  ReplaceItemOnListWithProps,
  TimesProps,
};

export {
  addItemToList,
  areObjectsEqual,
  decodeBase64,
  deepMerge,
  encodeBase64,
  getArrMaxValue,
  isEmpty,
  isNullish,
  isObject,
  removeItemFromList,
  removeItemFromListByIndex,
  replaceItemOnListWith,
  times,
  wrapInDebounce,
  wrapInThrottle,
};
