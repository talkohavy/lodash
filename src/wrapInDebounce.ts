type AnyFunction = (...args: any[]) => any;

type PromiseActions<R> = {
  resolve: (value: R | PromiseLike<R>) => void;
  reject: (reason?: any) => void;
};

export type DebouncedFunction<T extends AnyFunction> = (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>>;

export function wrapInDebounce<T extends AnyFunction>(callback: T, milliseconds = 300): DebouncedFunction<T> {
  type Result = Awaited<ReturnType<T>>;

  let timerId: ReturnType<typeof setTimeout> | undefined;
  let pendingPromises: Array<PromiseActions<Result>> = [];

  return function returnedDebouncedFunc(...args) {
    // Step 1: Clear the timer if it exists
    clearTimeout(timerId);

    return new Promise<Result>((resolve, reject) => {
      // Step 2: Add the promise to the pending promises
      pendingPromises.push({ resolve, reject });

      // Step 3: Set a new timer
      timerId = setTimeout(() => {
        /**
         * The invocation which arrives here is the winner! It's the only one that will be executed.
         * It not only needs to invoke the callback, but it also has the responsibility
         * to settle all his brethren pending promises.
         *
         * If it fails, it needs to reject all his brethren pending promises.
         * If it succeeds, it needs to resolve all his brethren pending promises.
         *
         * They would either all resolve or all reject at the same time.
         */

        // Step 4: Get pending promises, this includes all my brethren pending promises, plus my own.
        const promisesToSettle = pendingPromises;

        // Step 5: Clear the pending promises, so that next batch of invocations will have an empty pending promises array.
        pendingPromises = [];

        // Step 6: Invoke the callback once
        try {
          const result = callback(...args);
          // Step 7: Resolve the pending promises
          promisesToSettle.forEach((promise) => promise.resolve(result));
        } catch (error) {
          // Step 8: Reject the pending promises
          promisesToSettle.forEach((promise) => promise.reject(error));
        }
      }, milliseconds);
    });
  };
}
