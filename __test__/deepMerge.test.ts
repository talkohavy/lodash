import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { deepMerge } from '../src/deepMerge.ts';

describe('deepMerge', () => {
  it('should merge two flat objects correctly', () => {
    const obj1: Record<string, number> = { a: 1, b: 2 };
    const obj2: Record<string, number> = { b: 3, c: 4 };

    const actual = deepMerge(obj1, obj2);
    const expected = { a: 1, b: 3, c: 4 };

    assert.deepStrictEqual(actual, expected);
  });

  it('should merge nested objects correctly', () => {
    const obj1: { a: string; b: { aaa: { one: number }; bbb: boolean; ccc: string }; c: number[] } = {
      a: 'tal',
      b: { aaa: { one: 1 }, bbb: true, ccc: 'yes!' },
      c: [1, 2, 3],
    };
    const obj2: { a: string; b: { ccc: string }; c: number[]; d: string } = {
      a: 'daniel',
      b: { ccc: 'no' },
      c: [1, 2],
      d: 'new',
    };

    const actual = deepMerge(obj1, obj2);
    const expected = { a: 'daniel', b: { aaa: { one: 1 }, bbb: true, ccc: 'no' }, c: [1, 2], d: 'new' };

    assert.deepStrictEqual(actual, expected);
  });

  it('should handle null and undefined values correctly', () => {
    const obj1: { a: number; b: null; c: undefined } = { a: 1, b: null, c: undefined };
    const obj2: { a: undefined; b: number; d: number } = { a: undefined, b: 2, d: 4 };

    const actual = deepMerge(obj1, obj2);
    const expected = { a: 1, b: 2, c: undefined, d: 4 };

    assert.deepStrictEqual(actual, expected);
  });

  it('should handle empty objects', () => {
    const obj1: Record<string, unknown> = {};
    const obj2: { a: number } = { a: 1 };

    const actual1 = deepMerge(obj1, obj2);
    const expected1 = { a: 1 };
    assert.deepStrictEqual(actual1, expected1);

    const actual2 = deepMerge(obj2, obj1);
    const expected2 = { a: 1 };
    assert.deepStrictEqual(actual2, expected2);
  });

  it('should handle arrays correctly', () => {
    const obj1: { items: number[] } = { items: [1, 2, 3] };
    const obj2: { items: number[] } = { items: [4, 5] };

    const actual = deepMerge(obj1, obj2);
    const expected = { items: [4, 5] }; // Arrays are replaced, not merged

    assert.deepStrictEqual(actual, expected);
  });
});
