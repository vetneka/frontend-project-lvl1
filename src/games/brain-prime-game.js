import { PRIME_GAME_TRUE_ANSWER, PRIME_GAME_FALSE_ANSWER } from '../consts.js';
import { getRandomIntNumber } from '../utils.js';

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

const brainProgressionGame = (data) => {
  const randomNumber = data;
  const question = randomNumber;
  const expectedAnswer = isPrime(randomNumber) ? PRIME_GAME_TRUE_ANSWER : PRIME_GAME_FALSE_ANSWER;

  return [question, expectedAnswer];
};

export {
  generateGameData,
  brainProgressionGame as default,
};
