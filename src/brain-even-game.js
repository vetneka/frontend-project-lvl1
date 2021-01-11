import {
  COMMON_GREETING,
  USER_GREETING,
  USER_NAME_QUESTION_TEXT,
  DEFAULT_USER_NAME,

  EVEN_GAME_RULES,
  EVEN_GAME_QUESTION,
  EVEN_GAME_QUESTION_USER,
  EVEN_GAME_TRUE_ANSWER,
  EVEN_GAME_FALSE_ANSWER,
  EVEN_GAME_TRUE_MESSAGE,
  EVEN_GAME_FALSE_MESSAGE,
  EVEN_GAME_TRUE_END_MESSAGE,
  EVEN_GAME_FALSE_END_MESSAGE,
} from './consts.js';
import { print, askUser } from './cli.js';
import { getRandomIntNumber, isEven } from './utils.js';

const brainEvenGame = () => {
  const END_GAME_CORRECT_ANSWER_COUNT = 3;
  const [GAME_RANGE_MIN, GAME_RANGE_MAX] = [0, 100];

  let correctAnswerCount = 0;

  print(COMMON_GREETING);

  const userName = askUser(`${USER_NAME_QUESTION_TEXT} `, DEFAULT_USER_NAME);
  print(`${USER_GREETING}, ${userName}!`);

  print(EVEN_GAME_RULES);

  while (correctAnswerCount < END_GAME_CORRECT_ANSWER_COUNT) {
    const randomNumber = getRandomIntNumber(GAME_RANGE_MIN, GAME_RANGE_MAX);
    print(`${EVEN_GAME_QUESTION}: ${randomNumber}`);

    const trueAnswer = isEven(randomNumber) ? EVEN_GAME_TRUE_ANSWER : EVEN_GAME_FALSE_ANSWER;
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

export default brainEvenGame;
