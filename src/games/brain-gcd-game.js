import { getRandomIntNumber } from '../utils.js';

const [GAME_RANGE_MIN, GAME_RANGE_MAX] = [0, 10];

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

const generateGameData = () => {
  const firstNumber = getRandomIntNumber(GAME_RANGE_MIN, GAME_RANGE_MAX);
  const secondNumber = getRandomIntNumber(GAME_RANGE_MIN, GAME_RANGE_MAX);

  return [firstNumber, secondNumber];
};

const brainGCDGame = (data) => {
  const [firstNumber, secondNumber] = data;

  const question = `${firstNumber} ${secondNumber}`;
  const expectedAnswer = getGCD(firstNumber, secondNumber);

  return [question, expectedAnswer];
};

export {
  generateGameData,
  brainGCDGame as default,
};
