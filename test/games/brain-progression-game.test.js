import { strict as assert } from 'assert';
import brainProgressionGame from '../../src/games/brain-progression-game.js';

const testFunction = brainProgressionGame;

const tests = [
  {
    data: [9, 78, 3, 7],
    expected: ['78 81 84 87 90 93 96 .. 102', 99],
  },
  {
    data: [10, 29, 2, 6],
    expected: ['29 31 33 35 37 39 .. 43 45 47', 41],
  },
  {
    data: [5, 98, 1, 1],
    expected: ['98 .. 100 101 102', 99],
  },
];

tests.forEach(({ data, expected }) => {
  assert.deepStrictEqual(testFunction(data), expected);
});

console.log('All brain-progression tests has been passed!');
