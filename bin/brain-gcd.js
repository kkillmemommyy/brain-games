#!/usr/bin/env node
import startGame from '../src/engine.js';
import getQuiz from '../src/games/gcd.js';

const RULES = 'Find the greatest common divisor of given numbers.';
const NUMB_OF_ROUNDS = 3;

const quiz = getQuiz(NUMB_OF_ROUNDS);

startGame(RULES, quiz);
