#!/usr/bin/env node
import startGame from '../src/engine.js';
import getQuiz from '../src/games/progression.js';

const RULES = 'What number is missing in the progression?';
const NUMB_OF_ROUNDS = 3;

const quiz = getQuiz(NUMB_OF_ROUNDS);

startGame(RULES, quiz);
