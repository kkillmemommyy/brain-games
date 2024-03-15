#!/usr/bin/env node
import startGame from '../src/engine.js';
import getQuiz from '../src/games/calc.js';

const RULES = 'What is the result of the expression?';
const NUMB_OF_ROUNDS = 3;

const quiz = getQuiz(NUMB_OF_ROUNDS);

startGame(RULES, quiz);
