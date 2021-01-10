#!/usr/bin/env node
import { getUserName, greetingUser } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
greetingUser(userName);
