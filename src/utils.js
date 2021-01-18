const getRandomIntNumber = (min = 0, max = 10) => {
  const randomIntNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomIntNumber);
};

const getRandomArrayValue = (array) => {
  const randomIndex = getRandomIntNumber(0, array.length - 1);
  return array[randomIndex];
};

export {
  getRandomIntNumber,
  getRandomArrayValue,
};
