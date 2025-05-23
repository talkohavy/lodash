import { isObject } from './isObject';

/**
 * @example
 * const first = { a: 'tal', b: { aaa: { one: 1 }, bbb: true, ccc: 'yes!' }, c: [1,2,3] };
 * const second = { a: 'daniel', b: { ccc: 'no' }, c: [1,2], d: 'new' };
 *
 * console.log(deepMerge(first,second)); // Expected result: { a: "daniel", b: { aaa: { one: 1 }, bbb: true, ccc: "noooo" }, c: [1,2], d: 'new' }
 */
// Note! this must be an arrow function!
export const deepMerge = (obj1: any, obj2: any): any =>
  [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])].reduce((acc: any, key: string) => {
    acc[key] =
      obj1[key] && obj2[key] && isObject(obj1[key]) && isObject(obj2[key])
        ? deepMerge(obj1[key], obj2[key])
        : (obj2[key] ?? obj1[key]);

    return acc;
  }, {});
