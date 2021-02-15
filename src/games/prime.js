import { PRIME_GAME_TRUE_ANSWER, PRIME_GAME_FALSE_ANSWER } from '../consts.js';
import { getRandomIntNumber } from '../utils.js';
import playGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const [GAME_RANGE_MIN, GAME_RANGE_MAX] = [0, 10];

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return number > 1;
};

const generateGameData = () => getRandomIntNumber(GAME_RANGE_MIN, GAME_RANGE_MAX);

const createGameTask = (number) => {
  const expectedAnswer = isPrime(number) ? PRIME_GAME_TRUE_ANSWER : PRIME_GAME_FALSE_ANSWER;

  return [number, expectedAnswer];
};

export default () => playGame(createGameTask, generateGameData, gameDescription);
