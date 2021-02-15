import { getRandomIntNumber } from '../utils.js';
import playGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateGameData = () => getRandomIntNumber(0, 100);

const createGameTask = (number) => {
  const expectedAnswer = isEven(number) ? 'yes' : 'no';

  return [number, expectedAnswer];
};

export default () => playGame(createGameTask, generateGameData, gameDescription);
