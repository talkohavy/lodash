type AnyFunction = (...args: any[]) => any;

type PromiseActions = {
  resolve: (value: any) => void;
  reject: (reason?: any) => void;
};

/**
 * @description
 * A function wrapped with wrapInDebounce can be fired multiple times. On the first call, the clearTimeout(timer) step
 * is doing nothing, since there is nothing scheduled yet. However, from the second time onwards, each invocation needs
 * to reset the timer, or, in other words, cancel the previous call to `callback`, and reschedule it for a new time in the
 * future. This goes on as long as the user keeps invoking the debounce fn under X ms. The last schedule won't get cleared,
 * so that `callback` would finally be called.
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
export function wrapInDebounce<T extends AnyFunction>(
  callback: T,
  milliseconds = 300,
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  let timerId: ReturnType<typeof setTimeout> | null;
  const promisesArray: Array<PromiseActions> = [];

  return function returnedDebouncedFunc(...args: Parameters<T>): Promise<ReturnType<T>> {
    if (timerId) clearTimeout(timerId);

    const debouncedPromise = new Promise<ReturnType<T>>(function debouncePromiseExecutor(resolve, reject) {
      promisesArray.push({ resolve, reject });

      try {
        timerId = setTimeout(() => {
          timerId = null;

          const result = callback(...args);

          promisesArray.forEach(({ resolve }) => resolve(result));
        }, milliseconds);
      } catch (error) {
        promisesArray.forEach(({ reject }) => reject(error));
      }
    });

    return debouncedPromise;
  };
}
