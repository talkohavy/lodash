import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { wrapInThrottle } from '../dist/index.esm.mjs';

describe('wrapInThrottle', () => {
  it('should execute the callback immediately on first call', () => {
    let callCount = 0;
    const callback = (): number => {
      callCount++;
      return callCount;
    };

    const throttledFunc = wrapInThrottle(callback, 100);

    // Call the throttled function and verify immediate execution
    throttledFunc();
    assert.strictEqual(callCount, 1);
  });

  it('should ignore subsequent calls within the throttle period', () => {
    let callCount = 0;
    const callback = (): number => {
      callCount++;
      return callCount;
    };

    const throttledFunc = wrapInThrottle(callback, 100);

    // Call the throttled function
    throttledFunc();
    assert.strictEqual(callCount, 1);

    // Call again immediately - should be ignored
    throttledFunc();
    throttledFunc();
    assert.strictEqual(callCount, 1, 'Function should not be called again within throttle period');
  });

  it('should allow calls after the throttle period has elapsed', async () => {
    let callCount = 0;
    const callback = (): number => {
      callCount++;
      return callCount;
    };

    const throttledFunc = wrapInThrottle(callback, 100);

    // Call the throttled function
    throttledFunc();
    assert.strictEqual(callCount, 1);

    // Wait for the throttle period to elapse
    await new Promise<void>((resolve) => setTimeout(resolve, 150));

    // Call again - should be allowed
    throttledFunc();
    assert.strictEqual(callCount, 2, 'Function should be called again after throttle period');
  });

  it('should pass arguments to the callback correctly', () => {
    type Args = Array<string | number | { [key: string]: string }>;

    let lastArgs: Args | null = null;
    const callback = (...args: Args): Args => {
      lastArgs = args;
      return args;
    };

    const throttledFunc = wrapInThrottle(callback, 100);

    // Call with arguments
    throttledFunc('test', 123, { foo: 'bar' });

    // Verify arguments were passed correctly
    assert.deepStrictEqual(lastArgs, ['test', 123, { foo: 'bar' }]);
  });

  it('should use default delay of 300ms when not specified', async () => {
    let callCount = 0;
    const callback = (): number => {
      callCount++;
      return callCount;
    };

    const throttledFunc = wrapInThrottle(callback); // No delay specified, should use default 300ms

    // Call the throttled function
    throttledFunc();
    assert.strictEqual(callCount, 1);

    // Call again immediately - should be ignored
    throttledFunc();
    assert.strictEqual(callCount, 1);

    // Wait for less than the default throttle period
    await new Promise<void>((resolve) => setTimeout(resolve, 200));

    // Call again - should still be ignored
    throttledFunc();
    assert.strictEqual(callCount, 1, 'Function should still be throttled before 300ms');

    // Wait for the rest of the throttle period
    await new Promise<void>((resolve) => setTimeout(resolve, 150));

    // Call again - should be allowed
    throttledFunc();
    assert.strictEqual(callCount, 2, 'Function should be called again after default throttle period');
  });
});
