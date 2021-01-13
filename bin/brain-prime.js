#!/usr/bin/env node
import gameEngine from '../src/index.js';
import brainPrimeGame from '../src/games/brain-prime-game.js';
import { PRIME_GAME_RULES } from '../src/consts.js';

gameEngine(brainPrimeGame, PRIME_GAME_RULES);
