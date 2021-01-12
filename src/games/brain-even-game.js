import { EVEN_GAME_TRUE_ANSWER, EVEN_GAME_FALSE_ANSWER } from '../consts.js';
import { getRandomIntNumber, isEven } from '../utils.js';

const brainEvenGame = () => {
  const [GAME_RANGE_MIN, GAME_RANGE_MAX] = [0, 100];

  const question = getRandomIntNumber(GAME_RANGE_MIN, GAME_RANGE_MAX);
  const expectedAnswer = isEven(question) ? EVEN_GAME_TRUE_ANSWER : EVEN_GAME_FALSE_ANSWER;

  return [question, expectedAnswer];
};

export default brainEvenGame;
