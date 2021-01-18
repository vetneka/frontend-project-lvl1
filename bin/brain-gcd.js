#!/usr/bin/env node
import gameEngine from '../src/index.js';
import brainGCDGame, { generateGameData } from '../src/games/brain-gcd-game.js';
import { GCD_GAME_RULES } from '../src/consts.js';

gameEngine(brainGCDGame, generateGameData, GCD_GAME_RULES);
