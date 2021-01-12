#!/usr/bin/env node
import gameEngine from '../src/index.js';
import brainEvenGame from '../src/games/brain-even-game.js';
import { EVEN_GAME_RULES } from '../src/consts.js';

gameEngine(brainEvenGame, EVEN_GAME_RULES);
