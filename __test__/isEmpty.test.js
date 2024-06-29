import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { isEmpty } from '../dist/lib/isEmpty.js';

describe('isEmpty', () => {
  it('empty object should return true', () => {
    const value = {};

    const actual = isEmpty(value);
    const expected = true;

    assert.strictEqual(actual, expected);
  });

  it('non-empty object should return false', () => {
    const value = { foo: 'bar' };

    const actual = isEmpty(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('empty array should return true', () => {
    const value = [];

    const actual = isEmpty(value);
    const expected = true;

    assert.strictEqual(actual, expected);
  });

  it('non-empty array should return false', () => {
    const value = ['foo', 'bar'];

    const actual = isEmpty(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('empty string should return true', () => {
    const value = '';

    const actual = isEmpty(value);
    const expected = true;

    assert.strictEqual(actual, expected);
  });

  it('non-empty string should return false', () => {
    const value = 'not empty';

    const actual = isEmpty(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('truthy number should return true', () => {
    const value = 0;

    const actual = isEmpty(value);
    const expected = true;

    assert.strictEqual(actual, expected);
  });

  it('falsy number should return true', () => {
    const value = 0;

    const actual = isEmpty(value);
    const expected = true;

    assert.strictEqual(actual, expected);
  });

  it('function without attached methods should return true', () => {
    const value = () => {};

    const actual = isEmpty(value);
    const expected = true;

    assert.strictEqual(actual, expected);
  });

  it('function with attached methods should return false', () => {
    const value = () => {};
    value.aaa = 5;

    const actual = isEmpty(value);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('class without methods and without class fields should return true', () => {
    class Person {}

    const person = new Person();

    const actual = isEmpty(person);
    const expected = true;

    assert.strictEqual(actual, expected);
  });

  it('class without methods but with class fields should return false', () => {
    class Person {
      constructor(name) {
        this.name = name;
      }
    }

    const person = new Person('John');

    const actual = isEmpty(person);
    const expected = false;

    assert.strictEqual(actual, expected);
  });

  it('class with methods and without class fields should return true', () => {
    class Person {
      getNameJohn() {
        return 'John';
      }
    }

    const person = new Person();

    const actual = isEmpty(person);
    const expected = true;

    assert.strictEqual(actual, expected);
  });
});
