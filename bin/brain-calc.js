#!/usr/bin/env node
import gameEngine from '../src/index.js';
import brainCalcGame from '../src/games/brain-calc-game.js';
import { CALC_GAME_RULES } from '../src/consts.js';

gameEngine(brainCalcGame, CALC_GAME_RULES);
