const isEven = (number) => number % 2 === 0;

const getRandomIntNumber = (min = 0, max = 10) => {
  const randomIntNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomIntNumber);
};

export {
  isEven,
  getRandomIntNumber,
};
