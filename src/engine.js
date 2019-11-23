#!/usr/bin/env node

import readlineSync from 'readline-sync';

const checkUserAnswer = (userAnswer, correctAnswer, func, userName, count) => {
  // user answer === correct answer, call function again
  if (userAnswer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    if (count === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    return func(userName, count + 1);
  }

  // else, we inform the user that incorrect answer and call function with 0 accum
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return func(userName, 1);
};

const askQuestion = (question, correctAnswer, func, userName, acc) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  checkUserAnswer(userAnswer, correctAnswer, func, userName, acc);
};

export default askQuestion;
