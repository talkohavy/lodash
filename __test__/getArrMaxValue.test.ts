import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { getArrMaxValue } from '../dist/index.esm.mjs';

describe('getArrMaxValue', () => {
  it('should find the max value in an array of numbers', () => {
    const arr: number[] = [1, 5, 3, 9, 2];

    const actual = getArrMaxValue({ arr, valueExtractor: (item: number) => item });
    const expected = 9;

    assert.strictEqual(actual, expected);
  });

  it('should find the max value in an array of objects based on a property', () => {
    const arr: Array<{ id: number; age: number }> = [
      { id: 1, age: 25 },
      { id: 2, age: 32 },
      { id: 3, age: 19 },
      { id: 4, age: 45 },
    ];

    const actual = getArrMaxValue({ arr, valueExtractor: (item: { id: number; age: number }) => item.age });
    const expected = 45;

    assert.strictEqual(actual, expected);
  });

  it('should find the max length in an array of arrays', () => {
    const arr: number[][] = [[1, 2], [3, 4, 5, 6], [7], [8, 9, 10]];

    const actual = getArrMaxValue({ arr, valueExtractor: (item: number[]) => item.length });
    const expected = 4;

    assert.strictEqual(actual, expected);
  });

  it('should handle empty arrays by returning negative infinity', () => {
    const arr: number[] = [];

    const actual = getArrMaxValue({ arr, valueExtractor: (item: number) => item });
    const expected = Number.NEGATIVE_INFINITY;

    assert.strictEqual(actual, expected);
  });

  it('should handle complex nested data structures', () => {
    const arr: Array<{ data: { values: number[] } }> = [
      { data: { values: [1, 2, 3] } },
      { data: { values: [4, 5, 6, 7, 8] } },
      { data: { values: [9, 10] } },
    ];

    const actual = getArrMaxValue({
      arr,
      valueExtractor: (item: { data: { values: number[] } }) => item.data.values.length,
    });
    const expected = 5;

    assert.strictEqual(actual, expected);
  });
});
