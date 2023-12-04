import { isObject } from './isObject.js';

/** @description This function accepts two objects, and returns whether or not they are essentially equal. */
function areObjectsEqual(obj1: Record<any, any>, obj2: Record<any, any>): boolean {
  return [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])].every((key) => {
    if (isObject(obj1[key])) {
      const isSubKeyEqual = areObjectsEqual(obj1[key], obj2[key]);
      if (!isSubKeyEqual) return false;
    } else if (obj1[key] !== obj2[key]) return false;
    return true;
  });
}
export { areObjectsEqual };
