/**
 * @description
 * This function accepts a JavaScript object and checks whether it's empty.
 */
export function isEmpty(obj: any): boolean {
  // @ts-ignore
  for (const i in obj) return false;
  return true;
}
