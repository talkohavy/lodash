/**
 * @param { object } obj1 - The weaker object.
 * @param { object } obj2 - The stronger object.
 * @returns { object } A copy of the two objects deeply merged.
 * @example
 * const first = { a: 'tal', b: { aaa: { one: 1 }, bbb: true, ccc: 'yes!' }, c: [1,2,3] };
 * const second = { a: 'daniel', b: { ccc: 'no' }, c: [1,2], d: 'new' };
 *
 * console.log(deepMerge(first,second)); // Expected result: { a: "daniel", b: { aaa: { one: 1 }, bbb: true, ccc: "noooo" }, c: [1,2], d: 'new' }
 */
export function deepMerge(obj1: object, obj2: object): object;
