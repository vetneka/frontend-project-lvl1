import { getRandomIntNumber } from '../utils.js';
import playGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const [PROGRESSION_LENGTH_MIN, PROGRESSION_LENGTH_MAX] = [5, 10];
const [PROGRESSION_RANGE_MIN, PROGRESSION_RANGE_MAX] = [0, 100];
const [COMMON_DIFFERENCE_MIN, COMMON_DIFFERENCE_MAX] = [1, 10];

const createProgression = (length, firstItem, progressionStep) => {
  const progression = [firstItem];

  for (let i = 0; i < length - 1; i += 1) {
    progression.push(progression[i] + progressionStep);
  }

  return progression;
};

const generateGameData = () => {
  const progressionLength = getRandomIntNumber(PROGRESSION_LENGTH_MIN, PROGRESSION_LENGTH_MAX);
  const progressionFirstItem = getRandomIntNumber(PROGRESSION_RANGE_MIN, PROGRESSION_RANGE_MAX);
  const progressionStep = getRandomIntNumber(COMMON_DIFFERENCE_MIN, COMMON_DIFFERENCE_MAX);
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
