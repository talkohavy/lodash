/**
 * @description
 * Acts as a throttle function. A function wrapped with wrapInThrottle can be fired multiple times, but only the
 * first invocation would be taken under consideration. The rest of the calls, that are under X seconds since the
 * first* call, would be ignored.
 * @returns Returns the accepted function, only now wrapped in a throttle, so that it can now be called just like the original would.
 * @example
 * // How to use:
 * function saveInput(data = 'none') {
 *   console.log('Saving data', data);
 * }
 * const processChange = wrapInThrottle(saveInput, 4000);
 *
 * processChange(2);
 * processChange({ a: 1, b: 6 });
 * // output: 2
 */
function wrapInThrottle(fnToRun: (outerArgs: any) => any, milliseconds: number = 300) {
  let alreadyExecuting = false;

  return (...args: any) => {
    if (alreadyExecuting) return;

    // @ts-ignore
    fnToRun(...args); // execute the first one...

    alreadyExecuting = true;
    setTimeout(() => (alreadyExecuting = false), milliseconds);
  };
}

export { wrapInThrottle };
