import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { isNullish } from '../lib/isNullish.js';

describe('isNullish', () => {
  it('all the nullish cases should return true', () => {
    const value1 = undefined;
    const value2 = null;

    assert.strictEqual(isNullish(value1), true);
    assert.strictEqual(isNullish(value2), true);
  });

  it('all the none cases should return false', () => {
    const value1 = 123;
    const value2 = 'hello';
    const value3 = {};
    const value4 = [];
    const value5 = () => {};
    const value6 = 0;
    const value7 = '';
    const value8 = NaN;

    assert.strictEqual(isNullish(value1), false);
    assert.strictEqual(isNullish(value2), false);
    assert.strictEqual(isNullish(value3), false);
    assert.strictEqual(isNullish(value4), false);
    assert.strictEqual(isNullish(value5), false);
    assert.strictEqual(isNullish(value6), false);
    assert.strictEqual(isNullish(value7), false);
    assert.strictEqual(isNullish(value8), false);
  });
});
