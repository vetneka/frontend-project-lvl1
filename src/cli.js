import readlineSync from 'readline-sync';

const USER_NAME_QUESTION_TEXT = `May I have you name? `;
const DEFAULT_USER_NAME = 'Noname';

const getUserName = () => readlineSync.question(USER_NAME_QUESTION_TEXT, {
  defaultInput: DEFAULT_USER_NAME,
});

const greetingUser = (name) => {
  console.log(`Hello, ${name}!`);
};

export { getUserName, greetingUser };
