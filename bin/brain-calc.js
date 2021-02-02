#!/usr/bin/env node
import gameEngine from '../src/index.js';
import brainCalcGame, { generateGameData } from '../src/games/brain-calc-game.js';
import { CALC_GAME_RULES } from '../src/consts.js';

gameEngine(brainCalcGame, generateGameData, CALC_GAME_RULES);
