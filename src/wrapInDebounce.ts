/**
 * @description
 * Acts as a takeLatest function. A function wrapped with wrapInDebounce can be fired multiple times. On the first call, the clearTimeout(timer) step is not necessary since there is nothing scheduled yet.
 * But since the second time onwards, each invocation needs to reset the timer, or, in other words, cancel the previous calls to fnToRun, and reschedule it for a new time in the future.
 * This goes on as long as the visitor keeps hitting the keys under 300 ms. The last schedule won't get cleared, so that fnToRun() would finally be called.
 * @example
 * // How to use:
 * function saveInput(data = 'none') {
 *   console.log('Saving data', data);
 * }
 * const processChange = wrapInDebounce(saveInput, 4000);
 *
 * processChange(2);
 * processChange({ a: 1, b: 6 });
 * // output: Saving data { a: 1, b: 6 }
 */
function wrapInDebounce(fnToRun: (outerArgs?: any) => void, milliseconds = 300): (outerArgs: any) => any {
  let timerId: NodeJS.Timeout | null;

  return (...outerArgs: any) => {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      timerId = null;
      fnToRun(...outerArgs); // This line is similar as to doing: fnToRun.apply(null, arguments); without passing outerArgs, which is something you might see in other people's code.
    }, milliseconds);
  };
}

export { wrapInDebounce };
