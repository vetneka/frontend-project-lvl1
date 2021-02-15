import { getRandomIntNumber } from '../utils.js';
import playGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const createProgression = (length, firstItem, progressionStep) => {
  const progression = [firstItem];

  for (let i = 0; i < length - 1; i += 1) {
    progression.push(progression[i] + progressionStep);
  }

  return progression;
};

const generateGameData = () => {
  const progressionLength = getRandomIntNumber(5, 10);
  const progressionFirstItem = getRandomIntNumber(0, 100);
  const progressionStep = getRandomIntNumber(1, 10);
  const missingItemIndex = getRandomIntNumber(0, progressionLength - 1);

  return [
    progressionLength,
    progressionFirstItem,
    progressionStep,
    missingItemIndex,
  ];
};

const createGameTask = (data) => {
  const placeholder = '..';

  const [
    progressionLength,
    progressionFirstItem,
    progressionStep,
    missingItemIndex,
  ] = data;

  const progression = createProgression(progressionLength, progressionFirstItem, progressionStep);

  const expectedAnswer = progression[missingItemIndex];
  progression[missingItemIndex] = placeholder;

  const question = progression.join(' ');

  return [question, expectedAnswer];
};

export default () => playGame(createGameTask, generateGameData, gameDescription);
