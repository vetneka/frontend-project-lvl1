import { getRandomIntNumber, getRandomItemFromArray } from '../utils.js';
import playGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const supportedMathOperations = ['+', '-', '*'];

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
  const firstOperand = getRandomIntNumber(0, 50);
  const secondOperand = getRandomIntNumber(0, 50);
  const operation = getRandomItemFromArray(supportedMathOperations);

  return [firstOperand, secondOperand, operation];
};

const createGameTask = (data) => {
  const [firstOperand, secondOperand, operation] = data;

  const question = `${firstOperand} ${operation} ${secondOperand}`;
  const expectedAnswer = calcMathExpression(firstOperand, secondOperand, operation);

  return [question, expectedAnswer];
};

export default () => playGame(createGameTask, generateGameData, gameDescription);
