/**
 * @description This function accepts an array of objects, and returns the maxValue based on some predicate which accepts a current item.
 * @example
 * const maxLength = getArrMaxValue({ arr: series, predicate: (item) => item.data.length });
 */
function getArrMaxValue({ arr, predicate }: { arr: Array<any>; predicate: (value: any) => number }): number {
  return arr.reduce((curMaxValue, curItem) => {
    const curValue = predicate(curItem);
    return curMaxValue > curValue ? curMaxValue : curValue;
  }, undefined);
}

export { getArrMaxValue };
