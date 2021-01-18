import {
  GAME_QUESTION_TEXT,
  GAME_ANSWER_TEXT,

  GAME_TRUE_MESSAGE,
  GAME_FALSE_MESSAGE,

  GAME_TRUE_END_MESSAGE,
  GAME_FALSE_END_MESSAGE,
} from './consts.js';
import { askUser, greeting } from './cli.js';

const gameEngine = (game, getGameData, gameRules) => {
  const END_GAME_CORRECT_ANSWER_COUNT = 3;

  const userName = greeting();

  console.log(gameRules);

  for (let i = 0; i < END_GAME_CORRECT_ANSWER_COUNT; i += 1) {
    const gameData = getGameData();
    const [question, answer] = game(gameData);

    console.log(`${GAME_QUESTION_TEXT}:`, question);

    const expectedAnswer = String(answer);
    const userAnswer = askUser(`${GAME_ANSWER_TEXT}: `);

    if (userAnswer !== expectedAnswer) {
      console.log(`'${userAnswer}' ${GAME_FALSE_MESSAGE} '${expectedAnswer}'.`);
      return console.log(`${GAME_FALSE_END_MESSAGE}, ${userName}!`);
    }

    console.log(GAME_TRUE_MESSAGE);
  }

  return console.log(`${GAME_TRUE_END_MESSAGE}, ${userName}!`);
};

export default gameEngine;
