import { getRandomIntNumber } from '../utils.js';
import playGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const [GAME_RANGE_MIN, GAME_RANGE_MAX] = [0, 10];

const getGCD = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }

  return getGCD(b, (a % b));
};

const generateGameData = () => {
  const firstNumber = getRandomIntNumber(GAME_RANGE_MIN, GAME_RANGE_MAX);
  const secondNumber = getRandomIntNumber(GAME_RANGE_MIN, GAME_RANGE_MAX);

  return [firstNumber, secondNumber];
};

const createGameTask = (data) => {
  const [firstNumber, secondNumber] = data;

  const question = `${firstNumber} ${secondNumber}`;
  const expectedAnswer = getGCD(firstNumber, secondNumber);

  return [question, expectedAnswer];
};

export default () => playGame(createGameTask, generateGameData, gameDescription);
