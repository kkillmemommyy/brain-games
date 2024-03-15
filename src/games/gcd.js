import getRandomIntInclusive from '../utils/getRandomIntInclusive.js';
import gcd from '../utils/gcd.js';

const [LEFT_BORDER1, RIGHT_BORDER1] = [1, 50];
const [LEFT_BORDER2, RIGHT_BORDER2] = [1, 50];

const getQuiz = (numbOfQuestions) => {
  const quiz = [];
  for (let i = 1; i <= numbOfQuestions; i += 1) {
    const numb1 = getRandomIntInclusive(LEFT_BORDER1, RIGHT_BORDER1);
    const numb2 = getRandomIntInclusive(LEFT_BORDER2, RIGHT_BORDER2);
    const question = `${numb1} ${numb2}`;
    const rightAnswer = gcd(numb1, numb2);
    quiz.push([question, rightAnswer]);
  }

  return quiz;
};

export default getQuiz;
