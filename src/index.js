import {
  COMMON_GREETING,
  USER_GREETING,
  USER_NAME_QUESTION_TEXT,
  DEFAULT_USER_NAME,

  GAME_QUESTION_TEXT,
  GAME_ANSWER_TEXT,

  GAME_TRUE_MESSAGE,
  GAME_FALSE_MESSAGE,

  GAME_TRUE_END_MESSAGE,
  GAME_FALSE_END_MESSAGE,
} from './consts.js';
import { readlineSync } from './cli.js';

const gameEngine = (game, getGameData, gameRules) => {
  const END_GAME_CORRECT_ANSWER_COUNT = 3;

  console.log(COMMON_GREETING);

  const userName = readlineSync.question(`${USER_NAME_QUESTION_TEXT} `, {
    defaultInput: DEFAULT_USER_NAME,
  });

  console.log(`${USER_GREETING}, ${userName}!`);

  console.log(gameRules);

  for (let i = 0; i < END_GAME_CORRECT_ANSWER_COUNT; i += 1) {
    const gameData = getGameData();
    const [question, answer] = game(gameData);

    console.log(`${GAME_QUESTION_TEXT}:`, question);

    const expectedAnswer = String(answer);
    const userAnswer = readlineSync.question(`${GAME_ANSWER_TEXT}: `);

    if (userAnswer !== expectedAnswer) {
      console.log(`'${userAnswer}' ${GAME_FALSE_MESSAGE} '${expectedAnswer}'.`);
      return console.log(`${GAME_FALSE_END_MESSAGE}, ${userName}!`);
    }

    console.log(GAME_TRUE_MESSAGE);
  }

  return console.log(`${GAME_TRUE_END_MESSAGE}, ${userName}!`);
};

export default gameEngine;
