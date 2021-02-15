import readlineSync from 'readline-sync';
import {
  COMMON_GREETING,
  USER_GREETING,
  QUESTION_ABOUT_USER_NAME,
  DEFAULT_USER_NAME,
} from './consts.js';

const expectedCorrectAnswersCount = 3;

const playGame = (getGameTask, getGameData, gameDescription) => {
  console.log(COMMON_GREETING);

  const userName = readlineSync.question(`${QUESTION_ABOUT_USER_NAME} `, {
    defaultInput: DEFAULT_USER_NAME,
  });

  console.log(`${USER_GREETING}, ${userName}!`);

  console.log(gameDescription);

  for (let i = 0; i < expectedCorrectAnswersCount; i += 1) {
    const gameData = getGameData();
    const [question, answer] = getGameTask(gameData);

    console.log('Question:', question);

    const expectedAnswer = String(answer);
    const userAnswer = readlineSync.question('You answer: ');

    if (userAnswer !== expectedAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
