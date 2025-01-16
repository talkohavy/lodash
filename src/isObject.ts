/**
 * @description
 * This function accepts a variable and checks if it's of type object. NOTE: {} would return true, while [] and null would return false.
 */
export function isObject(toBeChecked: any): toBeChecked is Record<string, object> {
  return typeof toBeChecked === 'object' && !Array.isArray(toBeChecked) && toBeChecked !== null;
}
