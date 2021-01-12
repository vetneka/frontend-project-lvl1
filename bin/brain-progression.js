#!/usr/bin/env node
import gameEngine from '../src/index.js';
import brainProgressionGame from '../src/games/brain-progression-game.js';
import { PROGRESSION_GAME_RULES } from '../src/consts.js';

gameEngine(brainProgressionGame, PROGRESSION_GAME_RULES);
