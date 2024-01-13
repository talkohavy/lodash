import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { areObjectsEqual } from '../src/areObjectsEqual.js';

describe('areObjectsEqual', () => {
  describe('same pointer', () => {
    it('two empty objects should return true', () => {
      const obj1 = {};
      const obj2 = obj1;

      const actual = areObjectsEqual(obj1, obj2);
      const expected = true;

      assert.deepStrictEqual(obj1, obj2);
      assert.strictEqual(actual, expected);
    });

    it('two non-empty objects with should return true', () => {
      const obj1 = { foo: 'bar', name: 'John' };
      const obj2 = obj1;

      const actual = areObjectsEqual(obj1, obj2);
      const expected = true;

      assert.deepStrictEqual(obj1, obj2);
      assert.strictEqual(actual, expected);
    });

    it('two empty arrays should return true', () => {
      const obj1 = [];
      const obj2 = obj1;

      const actual = areObjectsEqual(obj1, obj2);
      const expected = true;

      assert.deepStrictEqual(obj1, obj2);
      assert.strictEqual(actual, expected);
    });

    it('two non-empty arrays should return true', () => {
      const obj1 = ['foo', { hello: 'world' }];
      const obj2 = obj1;

      const actual = areObjectsEqual(obj1, obj2);
      const expected = true;

      assert.deepStrictEqual(obj1, obj2);
      assert.strictEqual(actual, expected);
    });
  });

  describe('different pointers', () => {
    it('two empty objects should return true', () => {
      const obj1 = {};
      const obj2 = {};

      const actual = areObjectsEqual(obj1, obj2);
      const expected = true;

      assert.deepStrictEqual(obj1, obj2);
      assert.strictEqual(actual, expected);
    });

    it('two same-valued ordered objects should return true', () => {
      const obj1 = { foo: 'bar', name: 'John' };
      const obj2 = { foo: 'bar', name: 'John' };

      const actual = areObjectsEqual(obj1, obj2);
      const expected = true;

      assert.deepStrictEqual(obj1, obj2);
      assert.strictEqual(actual, expected);
    });

    it('two same-valued unordered objects should return true', () => {
      const obj1 = { name: 'John', foo: 'bar' };
      const obj2 = { foo: 'bar', name: 'John' };

      const actual = areObjectsEqual(obj1, obj2);
      const expected = true;

      assert.deepStrictEqual(obj1, obj2);
      assert.strictEqual(actual, expected);
    });

    it('two different-valued objects should return false', () => {
      const obj1 = { name: 'John', foo: 'bar', field: 'new field' };
      const obj2 = { foo: 'bar', name: 'John' };

      const actual = areObjectsEqual(obj1, obj2);
      const expected = false;

      assert.notDeepStrictEqual(obj1, obj2);
      assert.strictEqual(actual, expected);
    });
  });
});
