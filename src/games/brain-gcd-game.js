import { getRandomIntNumber } from '../utils.js';

const getGCD = (x, y) => {
  let tempX = x;
  let tempY = y;

  if (tempX <= 0 || tempY <= 0) return Math.max(tempX, tempY);

  while (tempX !== tempY) {
    if (tempX > tempY) {
      tempX -= tempY;
    } else {
      tempY -= tempX;
    }
  }

  return tempX;
};

const brainGCDGame = () => {
  const [GAME_RANGE_MIN, GAME_RANGE_MAX] = [0, 10];

  const firstNumber = getRandomIntNumber(GAME_RANGE_MIN, GAME_RANGE_MAX);
  const secondNumber = getRandomIntNumber(GAME_RANGE_MIN, GAME_RANGE_MAX);

  const question = `${firstNumber} ${secondNumber}`;
  const expectedAnswer = getGCD(firstNumber, secondNumber);

  return [question, expectedAnswer];
};

export default brainGCDGame;
