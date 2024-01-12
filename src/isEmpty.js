/**
 * @description This function accepts a JavaScript object and checks whether it's empty.
 * @param {any} obj - The object to be checked.
 * @returns {boolean} Returns true or false.
 */
function isEmpty(obj) {
  for (const i in obj) return false;
  return true;
}

export { isEmpty };
