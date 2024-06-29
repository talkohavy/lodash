/**
 * @description
 * This function accepts a JavaScript object and checks whether it's empty.
 */
function isEmpty(obj: any): boolean {
  for (const i in obj) return false;
  return true;
}

export { isEmpty };
