/**
 * @description
 * Acts as a throttle function. A function wrapped with wrapInThrottle can be fired multiple times, but only the
 * first invocation would be taken under consideration. The rest of the calls, that are under X seconds since the
 * first* call, would be ignored.
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
function wrapInThrottle(fnToRun: (outerArgs?: any) => any, milliseconds = 300): (outerArgs?: any) => any {
  let alreadyExecuting = false;

  return (...outerArgs: any) => {
    if (alreadyExecuting) return;

    // @ts-ignore
    fnToRun(...outerArgs); // execute the first one...

    alreadyExecuting = true;
    setTimeout(() => (alreadyExecuting = false), milliseconds);
  };
}

export { wrapInThrottle };
