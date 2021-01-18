import { EVEN_GAME_TRUE_ANSWER, EVEN_GAME_FALSE_ANSWER } from '../consts.js';
import { getRandomIntNumber } from '../utils.js';

const [GAME_RANGE_MIN, GAME_RANGE_MAX] = [0, 100];

const isEven = (number) => number % 2 === 0;

const generateGameData = () => getRandomIntNumber(GAME_RANGE_MIN, GAME_RANGE_MAX);

const brainEvenGame = (data) => {
  const question = data;
  const expectedAnswer = isEven(question) ? EVEN_GAME_TRUE_ANSWER : EVEN_GAME_FALSE_ANSWER;

  return [question, expectedAnswer];
};

export {
  generateGameData,
  brainEvenGame as default,
};
