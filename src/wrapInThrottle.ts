type AnyFunction = (...args: any[]) => any;

/**
 * @description
 * Acts as a throttle function. A function wrapped with wrapInThrottle can be fired multiple times, but only the
 * first invocation would be taken under consideration. The rest of the calls, that are under X seconds since the
 * first* call, would be ignored. The function returns a Promise which resolves with the result of the callback.
 * @example
 * // How to use:
 * function saveInput(data = 'none') {
 *   console.log('Saving data', data);
 *   return data;
 * }
 * const processChange = wrapInThrottle(saveInput, 4000);
 *
 * await processChange(2); // Executes immediately and returns 2
 * await processChange({ a: 1, b: 6 }); // Ignored if within 4000ms of first call
 * // output: Saving data 2
 */
export function wrapInThrottle<T extends AnyFunction>(
  callback: T,
  milliseconds = 300,
): (...args: Parameters<T>) => Promise<ReturnType<T> | undefined> {
  let alreadyExecuting = false;

  return function returnedThrottledFunc(...args: Parameters<T>): Promise<ReturnType<T> | undefined> {
    return new Promise<ReturnType<T> | undefined>(function throttlePromiseExecutor(resolve, reject) {
      try {
        if (alreadyExecuting) return resolve(undefined);

        const result: ReturnType<T> = callback(...args);

        alreadyExecuting = true;

        setTimeout(() => {
          alreadyExecuting = false;
        }, milliseconds);

        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };
}
