import { getRandomIntNumber, getRandomArrayValue } from '../utils.js';

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

const brainCalcGame = () => {
  const [GAME_RANGE_MIN, GAME_RANGE_MAX] = [0, 50];
  const supportedMathOperations = ['+', '-', '*'];

  const firstOperand = getRandomIntNumber(GAME_RANGE_MIN, GAME_RANGE_MAX);
  const secondOperand = getRandomIntNumber(GAME_RANGE_MIN, GAME_RANGE_MAX);
  const operation = getRandomArrayValue(supportedMathOperations);

  const question = `${firstOperand} ${operation} ${secondOperand}`;
  const expectedAnswer = calcMathExpression(firstOperand, secondOperand, operation);

  return [question, expectedAnswer];
};

export default brainCalcGame;
