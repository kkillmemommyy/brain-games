import getRandomIntInclusive from '../utils/getRandomIntInclusive.js';

const [LEFT_BORDER, RIGHT_BORDER] = [1, 100];

const getQuiz = (numbOfQuestions) => {
  const quiz = [];
  for (let i = 1; i <= numbOfQuestions; i += 1) {
    const question = getRandomIntInclusive(LEFT_BORDER, RIGHT_BORDER);
    const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
    quiz.push([question, rightAnswer]);
  }

  return quiz;
};

export default getQuiz;
