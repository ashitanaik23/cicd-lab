const test = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply } = require('./app');
test('adds two numbers', () => assert.strictEqual(add(17, 3), 20));
test('subtracts two numbers', () => assert.strictEqual(subtract(5, 3), 2));
test('mutiplies two numbers', () => assert.strictEqual(multiply(5, 3), 15));