import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { wrapInDebounce } from '../dist/index.esm.mjs';

describe('wrapInDebounce', () => {
  it('should execute the callback after the specified delay', async () => {
    let callCount = 0;
    const callback = (): number => {
      callCount++;
      return callCount;
    };

    const debouncedFunc = wrapInDebounce(callback, 100);

    const promise = debouncedFunc();

    // Verify that the callback hasn't been executed immediately
    assert.strictEqual(callCount, 0);

    // Wait for the debounce delay to pass
    const result = await promise;

    // Verify that the callback was executed once after the delay
    assert.strictEqual(callCount, 1);
    assert.strictEqual(result, 1);
  });

  it('should only execute the callback once for multiple rapid calls', async () => {
    let callCount = 0;
    const callback = (x: number): number => {
      callCount++;
      return x;
    };

    const debouncedFunc = wrapInDebounce(callback, 100);

    // Call the debounced function multiple times rapidly
    const promise1 = debouncedFunc(1);
    const promise2 = debouncedFunc(2);
    const promise3 = debouncedFunc(3);

    // Verify that the callback hasn't been executed immediately
    assert.strictEqual(callCount, 0);

    // Wait for all promises to resolve
    const promiseResults = await Promise.all([promise1, promise2, promise3]);
    const [result1, result2, result3] = promiseResults;

    // Verify that the callback was only executed once with the latest arguments
    assert.strictEqual(callCount, 1);
    assert.strictEqual(result1, 3);
    assert.strictEqual(result2, 3);
    assert.strictEqual(result3, 3);
  });

  it('should pass arguments to the callback', async () => {
    type Args = Array<string | number | { [key: string]: string }>;

    let lastArgs: Args = [];
    const callback = (...args: Args): Args => {
      lastArgs = args;
      return args;
    };

    const debouncedFunc = wrapInDebounce(callback, 100);

    // Call the debounced function with arguments
    const promise = debouncedFunc('test', 123, { foo: 'bar' });

    // Wait for the debounce delay to pass
    const result = await promise;

    // Verify that the arguments were passed correctly
    assert.deepStrictEqual(lastArgs, ['test', 123, { foo: 'bar' }]);
    assert.deepStrictEqual(result, ['test', 123, { foo: 'bar' }]);
  });

  it('should use the default delay of 300ms when not specified', async () => {
    let called = false;
    const startTime = Date.now();
    let executionTime = 0;

    const callback = (): boolean => {
      called = true;
      executionTime = Date.now() - startTime;
      return true;
    };

    const debouncedFunc = wrapInDebounce(callback); // No delay specified, should use default 300ms

    // Call the debounced function
    const promise = debouncedFunc();

    // Verify that the callback hasn't been executed immediately
    assert.strictEqual(called, false);

    // Wait for the promise to resolve
    await promise;

    // Verify that the callback was executed
    assert.strictEqual(called, true);

    // Check that the execution time is at least close to the default delay
    // We use a lower bound to account for timing inconsistencies
    assert.ok(executionTime >= 250, `Execution time (${executionTime}ms) should be close to default delay of 300ms`);
  });
});
