import assert from 'assert/strict';
import { describe, it } from 'node:test';
import { decodeBase64 } from '../dist/index.esm.mjs';

describe('decodeBase64', () => {
  it('should decode a base64 string correctly', () => {
    const encoded: string = 'SGVsbG8gV29ybGQ='; // "Hello World" in base64

    const actual = decodeBase64(encoded);
    const expected = 'Hello World';

    assert.strictEqual(actual, expected);
  });

  it('should decode a base64 string with special characters correctly', () => {
    const encoded: string = 'SGVsbG8gV29ybGQhIEA6Pyw='; // "Hello World! @:,=" in base64

    const actual = decodeBase64(encoded);
    const expected = 'Hello World! @:?,';

    assert.strictEqual(actual, expected);
  });

  it('should decode a base64 string with URL-encoded characters', () => {
    const encoded: string = 'SGVsbG8lMjBXb3JsZA=='; // "Hello%20World" in base64

    const actual = decodeBase64(encoded);
    const expected = 'Hello World';

    assert.strictEqual(actual, expected);
  });
});
