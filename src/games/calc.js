import getRandomIntInclusive from '../getRandomIntInclusive.js';
import { add, sub, mul } from '../operators.js';

const LEFT_BORDER1 = 1;
const RIGHT_BORDER1 = 30;

const LEFT_BORDER2 = 1;
const RIGHT_BORDER2 = 30;

const OPERATORS = { '+': add, '-': sub, '*': mul };
const minIndex = 0;
const maxIndex = Object.keys(OPERATORS).length - 1;

const getQuiz = (numbOfQuestions) => {
  const quiz = [];
  for (let i = 1; i <= numbOfQuestions; i += 1) {
    const leftOperand = getRandomIntInclusive(LEFT_BORDER1, RIGHT_BORDER1);
    const operator = Object.keys(OPERATORS)[getRandomIntInclusive(minIndex, maxIndex)];
    const rightOperand = getRandomIntInclusive(LEFT_BORDER2, RIGHT_BORDER2);

    const question = `${leftOperand} ${operator} ${rightOperand}`;
    const rightAnswer = OPERATORS[operator](leftOperand, rightOperand);
    quiz.push([question, rightAnswer]);
  }

  return quiz;
};

export default getQuiz;
