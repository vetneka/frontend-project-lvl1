import { getRandomIntNumber } from '../utils.js';
import playGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return number > 1;
};

const generateGameData = () => getRandomIntNumber(0, 10);

const createGameTask = (number) => {
  const expectedAnswer = isPrime(number) ? 'yes' : 'no';

  return [number, expectedAnswer];
};

export default () => playGame(createGameTask, generateGameData, gameDescription);
