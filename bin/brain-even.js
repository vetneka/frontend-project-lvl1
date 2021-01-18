#!/usr/bin/env node
import gameEngine from '../src/index.js';
import brainEvenGame, { generateGameData } from '../src/games/brain-even-game.js';
import { EVEN_GAME_RULES } from '../src/consts.js';

gameEngine(brainEvenGame, generateGameData, EVEN_GAME_RULES);
