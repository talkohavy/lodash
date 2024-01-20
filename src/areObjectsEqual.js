import { isObject } from './isObject.js';

/**
 * @description This function accepts two objects, and returns whether or not they are essentially equal.
 * @param {Record<string, number | string | boolean | object>} obj1 - The object to compare against.
 * @param {Record<string, number | string | boolean | object>} obj2 - The second input object.
 * @returns { boolean } Returns true or false.
 */
function areObjectsEqual(obj1, obj2) {
  const allKeysArr = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])];

  return allKeysArr.every((key) => {
    if (!(key in obj1 && key in obj2)) return false;

    // @ts-ignore
    const isObjNumericValue = isObject(obj1[key]) + isObject(obj2[key]);

    if (isObjNumericValue === 0) return obj1[key] === obj2[key];

    if (isObjNumericValue === 1) return false;

    if (isObjNumericValue === 2) return areObjectsEqual(obj1[key], obj2[key]);
  });
}

export { areObjectsEqual };
