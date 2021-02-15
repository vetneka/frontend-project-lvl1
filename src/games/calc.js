import { getRandomIntNumber, getRandomItemFromArray } from '../utils.js';
import playGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const [GAME_RANGE_MIN, GAME_RANGE_MAX] = [0, 50];
const SUPPORTED_MATH_OPERATIONS = ['+', '-', '*'];

const calcMathExpression = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unexpected operation: ${operation}`);
  }
};

const generateGameData = () => {
  const firstOperand = getRandomIntNumber(GAME_RANGE_MIN, GAME_RANGE_MAX);
  const secondOperand = getRandomIntNumber(GAME_RANGE_MIN, GAME_RANGE_MAX);
  const operation = getRandomItemFromArray(SUPPORTED_MATH_OPERATIONS);

  return [firstOperand, secondOperand, operation];
};

const createGameTask = (data) => {
  const [firstOperand, secondOperand, operation] = data;

  const question = `${firstOperand} ${operation} ${secondOperand}`;
  const expectedAnswer = calcMathExpression(firstOperand, secondOperand, operation);

  return [question, expectedAnswer];
};

export default () => playGame(createGameTask, generateGameData, gameDescription);
