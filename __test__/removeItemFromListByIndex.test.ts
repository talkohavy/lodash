import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { removeItemFromListByIndex } from '../src/removeItemFromListByIndex.ts';

describe('removeItemFromListByIndex', () => {
  it('should remove an item at the specified index from a list of numbers', () => {
    const list: number[] = [1, 2, 3, 4, 5];

    const actual = removeItemFromListByIndex({
      list,
      index: 2, // Remove item at index 2 (value 3)
    });
    const expected: number[] = [3]; // The function returns the removed items

    assert.deepStrictEqual(actual, expected);
  });

  it('should remove an item at the first index', () => {
    const list: number[] = [1, 2, 3, 4, 5];

    const actual = removeItemFromListByIndex({
      list,
      index: 0, // Remove first item
    });
    const expected: number[] = [1]; // The function returns the removed items

    assert.deepStrictEqual(actual, expected);
  });

  it('should remove an item at the last index', () => {
    const list: number[] = [1, 2, 3, 4, 5];

    const actual = removeItemFromListByIndex({
      list,
      index: 4, // Remove last item
    });
    const expected: number[] = [5]; // The function returns the removed items

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

    const actual = removeItemFromListByIndex({
      list,
      index: 1, // Remove item at index 1 (Bob)
    });
    const expected: Person[] = [{ id: 2, name: 'Bob' }]; // The function returns the removed items

    assert.deepStrictEqual(actual, expected);
  });

  it('should return empty array when index is out of bounds', () => {
    const list: number[] = [1, 2, 3];

    const actual = removeItemFromListByIndex({
      list,
      index: 5, // Index out of bounds
    });
    const expected: number[] = []; // No items were removed

    assert.deepStrictEqual(actual, expected);
  });
});
