import getRandomIntInclusive from '../utils/getRandomIntInclusive.js';

const [LEFT_BORDER, RIGHT_BORDER] = [1, 1000];

const isPrime = (numb) => {
  let candidate = 2;
  while (candidate < Math.sqrt(numb)) {
    if (numb % candidate === 0) {
      return 'no';
    }
    candidate += 1;
  }
  return 'yes';
};

const getQuiz = (numbOfQuestions) => {
  const quiz = [];
  for (let i = 1; i <= numbOfQuestions; i += 1) {
    const question = getRandomIntInclusive(LEFT_BORDER, RIGHT_BORDER);
    const rightAnswer = isPrime(question);
    quiz.push([question, rightAnswer]);
  }

  return quiz;
};

export default getQuiz;
