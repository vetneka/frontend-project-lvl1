import { strict as assert } from 'assert';
import brainEvenGame from '../../src/games/brain-even-game.js';

const testFunction = brainEvenGame;

const tests = [
  {
    data: 5,
    expected: [5, 'no'],
  },
  {
    data: 3,
    expected: [3, 'no'],
  },
  {
    data: 8,
    expected: [8, 'yes'],
  },
  {
    data: 0,
    expected: [0, 'yes'],
  },
];

tests.forEach(({ data, expected }) => {
  assert.deepStrictEqual(testFunction(data), expected);
});

console.log('All brain-even tests has been passed!');
