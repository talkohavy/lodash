import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { wrapInThrottle } from '../src/wrapInThrottle.ts';

describe('wrapInThrottle', () => {
  it('should execute the callback immediately on first call', async () => {
    let callCount = 0;
    const callback = (): number => {
      callCount++;
      return callCount;
    };

    const throttledFunc = wrapInThrottle(callback, 100);

    // Call the throttled function and verify immediate execution
    const result = await throttledFunc();
    assert.strictEqual(callCount, 1);
    assert.strictEqual(result, 1);
  });

  it('should ignore subsequent calls within the throttle period', async () => {
    let callCount = 0;
    const callback = (): number => {
      callCount++;
      return callCount;
    };

    const throttledFunc = wrapInThrottle(callback, 100);

    // Call the throttled function
    const firstResult = await throttledFunc();
    assert.strictEqual(callCount, 1);
    assert.strictEqual(firstResult, 1);

    // Call again immediately - should be ignored
    const secondResult = await throttledFunc();
    const thirdResult = await throttledFunc();
    assert.strictEqual(callCount, 1, 'Function should not be called again within throttle period');
    assert.strictEqual(secondResult, undefined, 'Second call should return undefined within throttle period');
    assert.strictEqual(thirdResult, undefined, 'Third call should return undefined within throttle period');
  });

  it('should allow calls after the throttle period has elapsed', async () => {
    let callCount = 0;
    const callback = (): number => {
      callCount++;
      return callCount;
    };

    const throttledFunc = wrapInThrottle(callback, 100);

    // Call the throttled function
    const firstResult = await throttledFunc();
    assert.strictEqual(callCount, 1);
    assert.strictEqual(firstResult, 1);

    // Wait for the throttle period to elapse
    await new Promise<void>((resolve) => setTimeout(resolve, 150));

    // Call again - should be allowed
    const secondResult = await throttledFunc();
    assert.strictEqual(callCount, 2, 'Function should be called again after throttle period');
    assert.strictEqual(secondResult, 2, 'Second call after throttle period should return new result');
  });

  it('should pass arguments to the callback correctly', async () => {
    type Args = Array<string | number | { [key: string]: string }>;

    let lastArgs: Args | null = null;
    const callback = (...args: Args): Args => {
      lastArgs = args;
      return args;
    };

    const throttledFunc = wrapInThrottle(callback, 100);

    // Call with arguments
    const result = await throttledFunc('test', 123, { foo: 'bar' });

    // Verify arguments were passed correctly
    assert.deepStrictEqual(lastArgs, ['test', 123, { foo: 'bar' }]);
    assert.deepStrictEqual(result, ['test', 123, { foo: 'bar' }]);
  });

  it('should use default delay of 300ms when not specified', async () => {
    let callCount = 0;
    const callback = (): number => {
      callCount++;
      return callCount;
    };

    const throttledFunc = wrapInThrottle(callback); // No delay specified, should use default 300ms

    // Call the throttled function
    const firstResult = await throttledFunc();
    assert.strictEqual(callCount, 1);
    assert.strictEqual(firstResult, 1);

    // Call again immediately - should be ignored
    const secondResult = await throttledFunc();
    assert.strictEqual(callCount, 1);
    assert.strictEqual(secondResult, undefined);

    // Wait for less than the default throttle period
    await new Promise<void>((resolve) => setTimeout(resolve, 200));

    // Call again - should still be ignored
    const thirdResult = await throttledFunc();
    assert.strictEqual(callCount, 1, 'Function should still be throttled before 300ms');
    assert.strictEqual(thirdResult, undefined);

    // Wait for the rest of the throttle period
    await new Promise<void>((resolve) => setTimeout(resolve, 150));

    // Call again - should be allowed
    const fourthResult = await throttledFunc();
    assert.strictEqual(callCount, 2, 'Function should be called again after default throttle period');
    assert.strictEqual(fourthResult, 2);
  });
});
