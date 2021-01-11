import readlineSync from 'readline-sync';

const print = (text) => {
  console.log(text);
};

const askUser = (question, defaultAnswer) => readlineSync.question(question, {
  defaultInput: defaultAnswer,
});

export {
  print,
  askUser,
};
