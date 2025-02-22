export type GetArrMaxValueProps<T> = {
  arr: Array<T>;
  valueExtractor: (value: T) => number;
};

/**
 * @description
 * This function accepts an array of objects, and returns the maxValue based on some predicate which accepts a current item.
 * @example
 *
 * const maxLength = getArrMaxValue({ arr: series, predicate: (item) => item.data.length });
 */
export function getArrMaxValue<T>(props: GetArrMaxValueProps<T>): number {
  const { arr, valueExtractor } = props;

  return arr.reduce((curMaxValue: number, curItem: T) => {
    const curValue = valueExtractor(curItem);

    return curMaxValue > curValue ? curMaxValue : curValue;
  }, Number.NEGATIVE_INFINITY);
}
