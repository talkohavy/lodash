import { isObject } from './isObject.js';

/**
 * @description
 * This function accepts two objects, and returns whether or not they are essentially equal.
 * obj1 is the object to compare against.
 * obj2 is the second input object.
 */
function areObjectsEqual(obj1: any, obj2: any): boolean {
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
