import { EVEN_GAME_TRUE_ANSWER, EVEN_GAME_FALSE_ANSWER } from '../consts.js';
import { getRandomIntNumber } from '../utils.js';
import playGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const [GAME_RANGE_MIN, GAME_RANGE_MAX] = [0, 100];

const isEven = (number) => number % 2 === 0;

const generateGameData = () => getRandomIntNumber(GAME_RANGE_MIN, GAME_RANGE_MAX);

const createGameTask = (number) => {
  const expectedAnswer = isEven(number) ? EVEN_GAME_TRUE_ANSWER : EVEN_GAME_FALSE_ANSWER;

  return [number, expectedAnswer];
};

export default () => playGame(createGameTask, generateGameData, gameDescription);
