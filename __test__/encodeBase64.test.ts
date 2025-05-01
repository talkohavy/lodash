import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { encodeBase64 } from '../dist/index.esm.mjs';
// import { encodeBase64 } from '../src/encodeBase64.ts';

describe('encodeBase64', () => {
  it('should encode a simple string correctly', () => {
    const str: string = 'Hello World';

    const actual = encodeBase64(str);
    const expected = 'SGVsbG8lMjBXb3JsZA==';

    assert.strictEqual(actual, expected);
  });

  it('should encode a string with special characters correctly', () => {
    const str: string = 'Hello World! @:,=';

    const actual = encodeBase64(str);
    const expected = 'SGVsbG8lMjBXb3JsZCElMjAlNDAlM0ElMkMlM0Q=';

    assert.strictEqual(actual, expected);
  });

  it('should handle empty string', () => {
    const str: string = '';

    const actual = encodeBase64(str);
    const expected = '';

    assert.strictEqual(actual, expected);
  });
});
