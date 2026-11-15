const test = require('node:test');
const assert = require('node:assert');
const { subtract } = require('./app');
test('subtracts two numbers', () => assert.strictEqual(subtract(5, 3), 2));