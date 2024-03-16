#!/usr/bin/env node
import startGame from '../src/engine.js';
import getQuiz from '../src/games/prime.js';

const RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const NUMB_OF_ROUNDS = 3;

const quiz = getQuiz(NUMB_OF_ROUNDS);

startGame(RULES, quiz);
