import { getRandomIntNumber } from '../utils.js';

const getProgressionTerm = (a1, n, d) => a1 + (n - 1) * d;

const createProgression = (length, firstTerm, commonDifference) => {
  const progression = [firstTerm];

  for (let i = 2; i <= length; i += 1) {
    const currentProgressionItem = getProgressionTerm(firstTerm, i, commonDifference);
    progression.push(currentProgressionItem);
  }

  return progression;
};

const brainProgressionGame = () => {
  const [PROGRESSION_LENGTH_MIN, PROGRESSION_LENGTH_MAX] = [5, 10];
  const [PROGRESSION_RANGE_MIN, PROGRESSION_RANGE_MAX] = [0, 100];
  const [COMMON_DIFFERENCE_MIN, COMMON_DIFFERENCE_MAX] = [1, 10];
  const placeholder = '..';

  const progressionLength = getRandomIntNumber(PROGRESSION_LENGTH_MIN, PROGRESSION_LENGTH_MAX);
  const progressionFirstItem = getRandomIntNumber(PROGRESSION_RANGE_MIN, PROGRESSION_RANGE_MAX);
  const commonDifference = getRandomIntNumber(COMMON_DIFFERENCE_MIN, COMMON_DIFFERENCE_MAX);

  const progression = createProgression(progressionLength, progressionFirstItem, commonDifference);

  const missingItemIndex = getRandomIntNumber(0, progressionLength - 1);
  const missingItem = progression[missingItemIndex];
  progression[missingItemIndex] = placeholder;

  const question = progression.join(' ');
  const expectedAnswer = missingItem;

  return [question, expectedAnswer];
};

export default brainProgressionGame;
