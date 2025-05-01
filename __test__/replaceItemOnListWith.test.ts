import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { replaceItemOnListWith } from '../dist/index.esm.mjs';

describe('replaceItemOnListWith', () => {
  it('should replace an item at the specified index in a list of numbers', () => {
    const list: number[] = [1, 2, 3, 4, 5];

    const actual = replaceItemOnListWith({
      list,
      newItem: 10,
      index: 2, // Replace item at index 2 (value 3) with 10
    });
    const expected: number[] = [1, 2, 10, 4, 5];

    assert.deepStrictEqual(actual, expected);
  });

  it('should replace an item at the first index', () => {
    const list: number[] = [1, 2, 3, 4, 5];

    const actual = replaceItemOnListWith({
      list,
      newItem: 10,
      index: 0, // Replace first item
    });
    const expected: number[] = [10, 2, 3, 4, 5];

    assert.deepStrictEqual(actual, expected);
  });

  it('should replace an item at the last index', () => {
    const list: number[] = [1, 2, 3, 4, 5];

    const actual = replaceItemOnListWith({
      list,
      newItem: 10,
      index: 4, // Replace last item
    });
    const expected: number[] = [1, 2, 3, 4, 10];

    assert.deepStrictEqual(actual, expected);
  });

  it('should handle object lists', () => {
    interface Person {
      id: number;
      name: string;
    }

    const list: Person[] = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ];

    const actual = replaceItemOnListWith({
      list,
      newItem: { id: 4, name: 'Dave' },
      index: 1, // Replace item at index 1 (Bob) with Dave
    });
    const expected: Person[] = [
      { id: 1, name: 'Alice' },
      { id: 4, name: 'Dave' },
      { id: 3, name: 'Charlie' },
    ];

    assert.deepStrictEqual(actual, expected);
  });

  it('should return the same list when index is out of bounds', () => {
    const list: number[] = [1, 2, 3];

    const actual = replaceItemOnListWith({
      list,
      newItem: 10,
      index: 5, // Index out of bounds
    });
    const expected: number[] = [1, 2, 3]; // List unchanged

    assert.deepStrictEqual(actual, expected);
  });

  it('should return a new list and not modify the original', () => {
    const originalList: number[] = [1, 2, 3];

    const newList = replaceItemOnListWith({
      list: originalList,
      newItem: 10,
      index: 1,
    });

    // Original list should be unchanged
    assert.deepStrictEqual(originalList, [1, 2, 3]);
    // New list should have the replacement
    assert.deepStrictEqual(newList, [1, 10, 3]);
  });
});
