import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { addItemToList } from '../dist/index.esm.mjs';

describe('addItemToList', () => {
  it('adds 1 item to array', () => {
    const newItem: { a: string } = { a: 'John' };
    const oldArr: string[] = ['Sarah', 'Nicky', 'Don'];

    const newArr = addItemToList({ list: oldArr, newItem });

    const actual = newArr.at(-1);
    const expected = newItem;

    assert.strictEqual(actual, expected);
  });

  it('adding does not mutate the original array', () => {
    const newItem: { a: string } = { a: 'John' };
    const oldArr: string[] = ['Sarah', 'Nicky', 'Don'];

    const newArr = addItemToList({ list: oldArr, newItem });

    const actual = oldArr;
    const expected = newArr;

    assert.notStrictEqual(actual, expected);
  });

  it("adding an item increases array's length by +1", () => {
    const newItem: { a: string } = { a: 'John' };
    const oldArr: string[] = ['Sarah', 'Nicky', 'Don'];

    const newArr = addItemToList({ list: oldArr, newItem });

    const actual = oldArr.length + 1;
    const expected = newArr.length;

    assert.strictEqual(actual, expected);
  });
});
