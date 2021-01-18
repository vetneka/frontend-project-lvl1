import { strict as assert } from 'assert';
import brainCalcGame from '../../src/games/brain-calc-game.js';

const testFunction = brainCalcGame;

const tests = [
  {
    data: [5, 6, '+'],
    expected: ['5 + 6', 11],
  },
  {
    data: [0, 50, '*'],
    expected: ['0 * 50', 0],
  },
  {
    data: [30, 20, '-'],
    expected: ['30 - 20', 10],
  },
  {
    data: [20, 30, '-'],
    expected: ['20 - 30', -10],
  },
];

tests.forEach(({ data, expected }) => {
  assert.deepStrictEqual(testFunction(data), expected);
});

console.log('All brain-calc tests has been passed!');
