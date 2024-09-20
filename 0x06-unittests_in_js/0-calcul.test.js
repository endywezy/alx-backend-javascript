#!/usr/bin/node

const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return 4 for calculateNumber(1, 3)', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 for calculateNumber(1, 3.7)', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 for calculateNumber(1.2, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 for calculateNumber(1.5, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Additional edge cases
  it('should return 2 for calculateNumber(1.4, 0.4)', () => {
    assert.strictEqual(calculateNumber(1.4, 0.4), 2);
  });

  it('should return 0 for calculateNumber(0.1, 0.1)', () => {
    assert.strictEqual(calculateNumber(0.1, 0.1), 0);
  });
});
