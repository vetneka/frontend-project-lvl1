import { strict as assert } from 'assert';
import brainGCDGame from '../../src/games/brain-gcd-game.js';

const testFunction = brainGCDGame;

const tests = [
  {
    data: [5, 7],
    expected: ['5 7', 1],
  },
  {
    data: [4, 50],
    expected: ['4 50', 2],
  },
  {
    data: [0, 50],
    expected: ['0 50', 50],
  },
  {
    data: [40, 100],
    expected: ['40 100', 20],
  },
];

tests.forEach(({ data, expected }) => {
  assert.deepStrictEqual(testFunction(data), expected);
});

console.log('All brain-gcd tests has been passed!');
