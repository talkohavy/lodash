import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { isNullish } from '../dist/lib/isNullish.js';

describe('isNullish', () => {
  it('null should return true', () => {
    const value = null;

    const actual = isNullish(value);
    const expected = true;

    assert.strictEqual(actual, expected);
  });

  it('undefined should return true', () => {
    const value = undefined;

    const actual = isNullish(value);
    const expected = true;

    assert.strictEqual(actual, expected);
  });

  it('number type should return false', () => {
    const value = 123;

    const actual = isNullish(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('string type should return false', () => {
    const value = 'some-word';

    const actual = isNullish(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('boolean type should return false', () => {
    const value = true;

    const actual = isNullish(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('object type should return false', () => {
    const value = { foo: 'bar' };

    const actual = isNullish(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('array type should return false', () => {
    const value = ['foo', 'bar'];

    const actual = isNullish(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('function type should return false', () => {
    const value = () => {};

    const actual = isNullish(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('edge case - number 0 should return false', () => {
    const value = 0;

    const actual = isNullish(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('edge case - empty string should return false', () => {
    const value = '';

    const actual = isNullish(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('edge case - empty object should return false', () => {
    const value = {};

    const actual = isNullish(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('edge case - empty array should return false', () => {
    const value = [];

    const actual = isNullish(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('edge case - NaN should return false', () => {
    const value = Number.NaN;

    const actual = isNullish(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });
});
