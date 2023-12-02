/**
 * @description This function accepts an array of objects, and returns the maxValue based on some predicate which accepts a current item.
 * @param {{ arr: Array, predicate: (value: any) => number }} props
 * @returns { number } Returns a the maxValue.
 * @example
 *
 * const maxLength = getArrMaxValue({ arr: series, predicate: (item) => item.data.length });
 */
export function getArrMaxValue({ arr, predicate }: {
    arr: any[];
    predicate: (value: any) => number;
}): number;
