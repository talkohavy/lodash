import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { areObjectsEqual } from '../dist/index.esm.mjs';

describe('areObjectsEqual', () => {
  describe('same pointer', () => {
    it('two empty objects should return true', () => {
      const obj1: Record<string, unknown> = {};
      const obj2 = obj1;

      const actual = areObjectsEqual(obj1, obj2);
      const expected = true;

      assert.deepStrictEqual(obj1, obj2);
      assert.strictEqual(actual, expected);
    });

    it('two non-empty objects with should return true', () => {
      const obj1: { foo: string; name: string } = { foo: 'bar', name: 'John' };
      const obj2 = obj1;

      const actual = areObjectsEqual(obj1, obj2);
      const expected = true;

      assert.deepStrictEqual(obj1, obj2);
      assert.strictEqual(actual, expected);
    });

    it('two empty arrays should return true', () => {
      const obj1: unknown[] = [];
      const obj2 = obj1;

      const actual = areObjectsEqual(obj1, obj2);
      const expected = true;

      assert.deepStrictEqual(obj1, obj2);
      assert.strictEqual(actual, expected);
    });

    it('two non-empty arrays should return true', () => {
      const obj1: [string, { hello: string }] = ['foo', { hello: 'world' }];
      const obj2 = obj1;

      const actual = areObjectsEqual(obj1, obj2);
      const expected = true;

      assert.deepStrictEqual(obj1, obj2);
      assert.strictEqual(actual, expected);
    });
  });

  describe('different pointers', () => {
    it('two empty objects should return true', () => {
      const obj1: Record<string, unknown> = {};
      const obj2: Record<string, unknown> = {};

      const actual = areObjectsEqual(obj1, obj2);
      const expected = true;

      assert.deepStrictEqual(obj1, obj2);
      assert.strictEqual(actual, expected);
    });

    it('two same-valued ordered objects should return true', () => {
      const obj1: { foo: string; name: string } = { foo: 'bar', name: 'John' };
      const obj2: { foo: string; name: string } = { foo: 'bar', name: 'John' };

      const actual = areObjectsEqual(obj1, obj2);
      const expected = true;

      assert.deepStrictEqual(obj1, obj2);
      assert.strictEqual(actual, expected);
    });

    it('two same-valued unordered objects should return true', () => {
      const obj1: { name: string; foo: string } = { name: 'John', foo: 'bar' };
      const obj2: { foo: string; name: string } = { foo: 'bar', name: 'John' };

      const actual = areObjectsEqual(obj1, obj2);
      const expected = true;

      assert.deepStrictEqual(obj1, obj2);
      assert.strictEqual(actual, expected);
    });

    it('two different-valued objects should return false', () => {
      const obj1: { name: string; foo: string; field: string } = { name: 'John', foo: 'bar', field: 'new field' };
      const obj2: { foo: string; name: string } = { foo: 'bar', name: 'John' };

      const actual = areObjectsEqual(obj1, obj2);
      const expected = false;

      assert.notDeepStrictEqual(obj1, obj2);
      assert.strictEqual(actual, expected);
    });

    it('same key different value should say not equal', () => {
      const obj1: { name: { foo: { bar: string } } } = { name: { foo: { bar: '123' } } };
      const obj2: { name: string } = { name: 'John' };

      const actual = areObjectsEqual(obj1, obj2);
      const expected = false;

      assert.notDeepStrictEqual(obj1, obj2);
      assert.strictEqual(actual, expected);
    });
  });
});
