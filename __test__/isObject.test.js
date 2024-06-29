import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { isObject } from '../dist/lib/isObject.js';

describe('isObject', () => {
  it('object should return true', () => {
    const value = {};

    const actual = isObject(value);
    const expected = true;

    assert.strictEqual(actual, expected);
  });

  it('number should return false', () => {
    const value = 123;

    const actual = isObject(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('string should return false', () => {
    const value = 'some-word';

    const actual = isObject(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('boolean should return false', () => {
    const value = true;

    const actual = isObject(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('array should return false', () => {
    const value = ['foo', 'bar'];

    const actual = isObject(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('function should return false', () => {
    const value = () => {};

    const actual = isObject(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('null should return false', () => {
    const value = null;

    const actual = isObject(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('undefined should return false', () => {
    const value = undefined;

    const actual = isObject(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('NaN should return false', () => {
    const value = Number.NaN;

    const actual = isObject(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });
});
