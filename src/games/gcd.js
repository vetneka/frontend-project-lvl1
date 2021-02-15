import { getRandomIntNumber } from '../utils.js';
import playGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }

  return getGCD(b, (a % b));
};

const generateGameData = () => [
  getRandomIntNumber(0, 10),
  getRandomIntNumber(0, 10),
];

const createGameTask = (data) => {
  const [firstNumber, secondNumber] = data;

  const question = `${firstNumber} ${secondNumber}`;
  const expectedAnswer = getGCD(firstNumber, secondNumber);

  return [question, expectedAnswer];
};

export default () => playGame(createGameTask, generateGameData, gameDescription);
