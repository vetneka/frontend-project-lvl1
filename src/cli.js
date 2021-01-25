import readlineSync from 'readline-sync';
import {
  COMMON_GREETING,
  USER_GREETING,
  USER_NAME_QUESTION_TEXT,
  DEFAULT_USER_NAME,
} from './consts.js';

const greeting = () => {
  console.log(COMMON_GREETING);
  const userName = readlineSync.question(`${USER_NAME_QUESTION_TEXT} `, {
    defaultInput: DEFAULT_USER_NAME,
  });
  console.log(`${USER_GREETING}, ${userName}!`);
};

export {
  greeting,
  readlineSync,
};
