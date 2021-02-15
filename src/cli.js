import readlineSync from 'readline-sync';
import {
  COMMON_GREETING,
  USER_GREETING,
  QUESTION_ABOUT_USER_NAME,
  DEFAULT_USER_NAME,
} from './consts.js';

const greeting = () => {
  console.log(COMMON_GREETING);

  const userName = readlineSync.question(`${QUESTION_ABOUT_USER_NAME} `, {
    defaultInput: DEFAULT_USER_NAME,
  });

  console.log(`${USER_GREETING}, ${userName}!`);
};

export default greeting;
