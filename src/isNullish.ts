/**
 * @description
 * This function accepts a value and check whether it's equal to null or to undefined.
 */
export function isNullish(value: any): value is null | undefined {
  return value == null;
}
