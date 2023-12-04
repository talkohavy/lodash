/**
 * @description This function accepts a variable and checks if it's of type object. NOTE: {} would return true, while [] and null would return false.
 */
function isObject(toBeChecked: object): toBeChecked is Record<string, object> {
  return typeof toBeChecked === 'object' && !Array.isArray(toBeChecked) && toBeChecked !== null;
}

export { isObject };
