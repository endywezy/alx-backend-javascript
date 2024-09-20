#!/usr/bin/node

/**
 * Calculates the sum of two rounded numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the rounded numbers.
 */
const calculateNumber = (a, b) => {
  return Math.round(a) + Math.round(b);
};

module.exports = calculateNumber;
