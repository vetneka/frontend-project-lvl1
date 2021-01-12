import {
  COMMON_GREETING,
  USER_GREETING,
  USER_NAME_QUESTION_TEXT,
  DEFAULT_USER_NAME,

  EVEN_GAME_QUESTION,
  EVEN_GAME_QUESTION_USER,
  EVEN_GAME_TRUE_MESSAGE,
  EVEN_GAME_FALSE_MESSAGE,
  EVEN_GAME_TRUE_END_MESSAGE,
  EVEN_GAME_FALSE_END_MESSAGE,

  CALC_GAME_RULES,
} from './consts.js';
import { print, askUser } from './cli.js';
import { getRandomIntNumber, getRandomArrayValue } from './utils.js';

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
  const END_GAME_CORRECT_ANSWER_COUNT = 3;
  const [GAME_RANGE_MIN, GAME_RANGE_MAX] = [0, 100];
  const supportedMathOperations = ['+', '-', '*'];

  let correctAnswerCount = 0;

  print(COMMON_GREETING);

  const userName = askUser(`${USER_NAME_QUESTION_TEXT} `, DEFAULT_USER_NAME);
  print(`${USER_GREETING}, ${userName}!`);

  print(CALC_GAME_RULES);

  while (correctAnswerCount < END_GAME_CORRECT_ANSWER_COUNT) {
    const firstOperand = getRandomIntNumber(GAME_RANGE_MIN, GAME_RANGE_MAX);
    const secondOperand = getRandomIntNumber(GAME_RANGE_MIN, GAME_RANGE_MAX);
    const operation = getRandomArrayValue(supportedMathOperations);
    const mathExpression = `${firstOperand} ${operation} ${secondOperand}`;

    print(`${EVEN_GAME_QUESTION}: ${mathExpression}`);

    const trueAnswer = String(calcMathExpression(firstOperand, secondOperand, operation));
    const userAnswer = askUser(`${EVEN_GAME_QUESTION_USER}: `);

    if (userAnswer !== trueAnswer) {
      print(`'${userAnswer}' ${EVEN_GAME_FALSE_MESSAGE} '${trueAnswer}'.`);
      return print(`${EVEN_GAME_FALSE_END_MESSAGE}, ${userName}!`);
    }

    print(EVEN_GAME_TRUE_MESSAGE);
    correctAnswerCount += 1;
  }

  return print(`${EVEN_GAME_TRUE_END_MESSAGE}, ${userName}!`);
};

export default brainCalcGame;
