import getRandomIntInclusive from '../utils/getRandomIntInclusive.js';

const LENGTH = 10
const [LEFT_BORDER1, RIGHT_BORDER1] = [-20, 20];
const [LEFT_BORDER2, RIGHT_BORDER2] = [-200, 200];

const getSequence = (start, step, index) => {
  const sequence = [];
  let rightAnswer = 0;
  for (let k = 0; k < LENGTH; k += 1) {
    const elem = String(start + k * step);
    if (k === index) {
      sequence.push('..');
      rightAnswer = elem;
    } else {
      sequence.push(elem);
    }
  }

  return [sequence, rightAnswer];
};

const getQuiz = (numbOfQuestions) => {
  const quiz = [];
  for (let i = 1; i <= numbOfQuestions; i += 1) {
    const start = getRandomIntInclusive(LEFT_BORDER1, RIGHT_BORDER1);
    const step = getRandomIntInclusive(LEFT_BORDER2, RIGHT_BORDER2);
    const index = getRandomIntInclusive(0, LENGTH - 1);
    const [sequence, rightAnswer] = getSequence(start, step, index);
    const question = sequence.join(' ');
    quiz.push([question, rightAnswer]);
  }

  return quiz;
};

export default getQuiz;
