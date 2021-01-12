#!/usr/bin/env node
import gameEngine from '../src/index.js';
import brainGCDGame from '../src/games/brain-gcd-game.js';
import { GCD_GAME_RULES } from '../src/consts.js';

gameEngine(brainGCDGame, GCD_GAME_RULES);
