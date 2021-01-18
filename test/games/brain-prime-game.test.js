import { strict as assert } from 'assert';
import brainPrimeGame from '../../src/games/brain-prime-game.js';

const testFunction = brainPrimeGame;

const tests = [
  {
    data: 11,
    expected: [11, 'yes'],
  },
  {
    data: 3559,
    expected: [3559, 'yes'],
  },
  {
    data: -1,
    expected: [-1, 'no'],
  },
  {
    data: 0,
    expected: [0, 'no'],
  },
  {
    data: 1,
    expected: [1, 'no'],
  },
  {
    data: 2,
    expected: [2, 'yes'],
  },
];

tests.forEach(({ data, expected }) => {
  assert.deepStrictEqual(testFunction(data), expected);
});

console.log('All brain-prime tests has been passed!');
