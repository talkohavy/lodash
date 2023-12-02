/**
 * @description This function accepts a variable and checks if it's of type object. NOTE: {} would return true, while [] and null would return false.
 * @param { object } toBeChecked - The value to be checked.
 * @returns { toBeChecked is Record<string, object> } Returns true or false.
 */
export function isObject(toBeChecked: object): toBeChecked is Record<string, any>;
