/**
 * @description This function accepts a value and check whether it's equal to null or to undefined.
 * @returns { boolean } Returns true if a certain value is nullish.
 */
function isNullish(value: any): boolean {
  return value == null;
}

export { isNullish };
