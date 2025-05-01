import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { removeItemFromList } from '../dist/index.esm.mjs';

describe('removeItemFromList', () => {
  it('should remove items from a list of numbers based on criteria', () => {
    const list: number[] = [1, 2, 3, 4, 5];

    const actual = removeItemFromList({
      list,
      filterBy: (item: number) => item !== 3, // Remove the item with value 3
    });
    const expected: number[] = [1, 2, 4, 5];

    assert.deepStrictEqual(actual, expected);
  });

  it('should remove multiple items from a list based on criteria', () => {
    const list: number[] = [1, 2, 3, 4, 5];

    const actual = removeItemFromList({
      list,
      filterBy: (item: number) => item % 2 === 0, // Keep only even numbers
    });
    const expected: number[] = [2, 4];

    assert.deepStrictEqual(actual, expected);
  });

  it('should remove items from a list of objects based on criteria', () => {
    interface Person {
      id: number;
      name: string;
      age: number;
    }

    const list: Person[] = [
      { id: 1, name: 'Alice', age: 30 },
      { id: 2, name: 'Bob', age: 25 },
      { id: 3, name: 'Charlie', age: 35 },
    ];

    const actual = removeItemFromList({
      list,
      filterBy: (item: Person) => item.age >= 30, // Keep only people 30 or older
    });
    const expected: Person[] = [
      { id: 1, name: 'Alice', age: 30 },
      { id: 3, name: 'Charlie', age: 35 },
    ];

    assert.deepStrictEqual(actual, expected);
  });

  it('should handle empty lists', () => {
    const list: number[] = [];

    const actual = removeItemFromList({
      list,
      filterBy: () => true,
    });
    const expected: number[] = [];

    assert.deepStrictEqual(actual, expected);
  });

  it('should return empty list when no items match the criteria', () => {
    const list: number[] = [1, 2, 3, 4, 5];

    const actual = removeItemFromList({
      list,
      filterBy: () => false, // No items match
    });
    const expected: number[] = [];

    assert.deepStrictEqual(actual, expected);
  });
});
