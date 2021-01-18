import { getRandomIntNumber } from '../utils.js';

const [PROGRESSION_LENGTH_MIN, PROGRESSION_LENGTH_MAX] = [5, 10];
const [PROGRESSION_RANGE_MIN, PROGRESSION_RANGE_MAX] = [0, 100];
const [COMMON_DIFFERENCE_MIN, COMMON_DIFFERENCE_MAX] = [1, 10];

const getProgressionTerm = (a1, n, d) => a1 + (n - 1) * d;

const createProgression = (length, firstTerm, commonDifference) => {
  const progression = [firstTerm];

  for (let i = 2; i <= length; i += 1) {
    const currentProgressionItem = getProgressionTerm(firstTerm, i, commonDifference);
    progression.push(currentProgressionItem);
  }

  return progression;
};

const generateGameData = () => {
  const progressionLength = getRandomIntNumber(PROGRESSION_LENGTH_MIN, PROGRESSION_LENGTH_MAX);
  const progressionFirstItem = getRandomIntNumber(PROGRESSION_RANGE_MIN, PROGRESSION_RANGE_MAX);
  const commonDifference = getRandomIntNumber(COMMON_DIFFERENCE_MIN, COMMON_DIFFERENCE_MAX);
  const missingItemIndex = getRandomIntNumber(0, progressionLength - 1);

  return [
    progressionLength,
    progressionFirstItem,
    commonDifference,
    missingItemIndex,
  ];
};

const brainProgressionGame = (data) => {
  const placeholder = '..';
  const [
    progressionLength,
    progressionFirstItem,
    commonDifference,
    missingItemIndex,
  ] = data;

  const progression = createProgression(progressionLength, progressionFirstItem, commonDifference);

  const missingItem = progression[missingItemIndex];
  progression[missingItemIndex] = placeholder;

  const question = progression.join(' ');
  const expectedAnswer = missingItem;

  return [question, expectedAnswer];
};

export {
  generateGameData,
  brainProgressionGame as default,
};
