import readlineSync from 'readline-sync';
import {
  COMMON_GREETING,
  USER_GREETING,
  USER_NAME_QUESTION_TEXT,
  DEFAULT_USER_NAME,
} from './consts.js';

const print = (text) => {
  console.log(text);
};

const askUser = (question, defaultAnswer) => readlineSync.question(question, {
  defaultInput: defaultAnswer,
});

const greeting = () => {
  print(COMMON_GREETING);
  const userName = askUser(`${USER_NAME_QUESTION_TEXT} `, DEFAULT_USER_NAME);
  print(`${USER_GREETING}, ${userName}!`);

  return userName;
};

export {
  print,
  askUser,
  greeting,
};
