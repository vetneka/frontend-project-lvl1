import { PRIME_GAME_TRUE_ANSWER, PRIME_GAME_FALSE_ANSWER } from '../consts.js';
import { getRandomIntNumber } from '../utils.js';

const isPrime = (number) => {
  if (number === 2) return true;
  if (number <= 1 || number % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const brainProgressionGame = () => {
  const [GAME_RANGE_MIN, GAME_RANGE_MAX] = [0, 10];

  const randomNumber = getRandomIntNumber(GAME_RANGE_MIN, GAME_RANGE_MAX);

  const question = randomNumber;
  const expectedAnswer = isPrime(randomNumber) ? PRIME_GAME_TRUE_ANSWER : PRIME_GAME_FALSE_ANSWER;

  return [question, expectedAnswer];
};

export default brainProgressionGame;
