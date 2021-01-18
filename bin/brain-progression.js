#!/usr/bin/env node
import gameEngine from '../src/index.js';
import brainProgressionGame, { generateGameData } from '../src/games/brain-progression-game.js';
import { PROGRESSION_GAME_RULES } from '../src/consts.js';

gameEngine(brainProgressionGame, generateGameData, PROGRESSION_GAME_RULES);
