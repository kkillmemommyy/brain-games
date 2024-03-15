#!/usr/bin/env node
import startGame from '../src/engine.js';
import getQuiz from '../src/games/even.js';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';
const NUMB_OF_ROUNDS = 3;

const quiz = getQuiz(NUMB_OF_ROUNDS);

startGame(RULES, quiz);
