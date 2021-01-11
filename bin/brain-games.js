#!/usr/bin/env node
import {
  COMMON_GREETING,
  USER_GREETING,
  USER_NAME_QUESTION_TEXT,
  DEFAULT_USER_NAME,
} from '../src/consts.js';
import { print, askUser } from '../src/cli.js';

print(COMMON_GREETING);
const userName = askUser(USER_NAME_QUESTION_TEXT, DEFAULT_USER_NAME);
print(`${USER_GREETING}, ${userName}`);
