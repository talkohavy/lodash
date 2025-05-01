import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { isObject } from '../dist/index.esm.mjs';

describe('isObject', () => {
  it('object should return true', () => {
    const value: Record<string, unknown> = {};

    const actual = isObject(value);
    const expected = true;

    assert.strictEqual(actual, expected);
  });

  it('number should return false', () => {
    const value: number = 123;

    const actual = isObject(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('string should return false', () => {
    const value: string = 'some-word';

    const actual = isObject(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('boolean should return false', () => {
    const value: boolean = true;

    const actual = isObject(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('array should return false', () => {
    const value: string[] = ['foo', 'bar'];

    const actual = isObject(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('function should return false', () => {
    const value: () => void = () => {};

    const actual = isObject(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('null should return false', () => {
    const value: null = null;

    const actual = isObject(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('undefined should return false', () => {
    const value: undefined = undefined;

    const actual = isObject(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('NaN should return false', () => {
    const value: number = Number.NaN;

    const actual = isObject(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });
});
