#!/usr/bin/env node
import gameEngine from '../src/index.js';
import brainPrimeGame, { generateGameData } from '../src/games/brain-prime-game.js';
import { PRIME_GAME_RULES } from '../src/consts.js';

gameEngine(brainPrimeGame, generateGameData, PRIME_GAME_RULES);
