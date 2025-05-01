import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { times } from '../dist/index.esm.mjs';

describe('times', () => {
  it('should execute a function the specified number of times', () => {
    let counter = 0;

    times({
      howMany: 5,
      funcToRun: () => {
        counter++;
      },
    });

    assert.strictEqual(counter, 5);
  });

  it('should pass the iteration number to the function', () => {
    const numbers: number[] = [];

    times({
      howMany: 3,
      funcToRun: (i: number) => {
        numbers.push(i);
      },
    });

    assert.deepStrictEqual(numbers, [0, 1, 2]);
  });

  it('should not execute the function when howMany is 0', () => {
    let counter = 0;

    times({
      howMany: 0,
      funcToRun: () => {
        counter++;
      },
    });

    assert.strictEqual(counter, 0);
  });

  it('should not execute the function when howMany is negative', () => {
    let counter = 0;

    times({
      howMany: -5,
      funcToRun: () => {
        counter++;
      },
    });

    assert.strictEqual(counter, 0);
  });

  it('should work with complex operations in the callback', () => {
    const result: { [key: string]: number } = {};

    times({
      howMany: 3,
      funcToRun: (i: number) => {
        result[`item${i}`] = i * 10;
      },
    });

    assert.deepStrictEqual(result, {
      item0: 0,
      item1: 10,
      item2: 20,
    });
  });
});
