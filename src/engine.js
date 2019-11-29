#!/usr/bin/env node

import readlineSync from 'readline-sync';

const checkUserAnswer = (userAnswer, correctAnswer, func, userName, count) => {
  // user answer === correct answer, call function again
  if (userAnswer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    if (count === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    return func(count + 1, userName);
  }

  // else, we inform the user that incorrect answer and call function with 0 accum
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return func(1, userName);
};

const askQuestion = (question, correctAnswer, func, name, message, acc) => {
  let userName = name;

  if (!userName) {
    console.log('Welcome to the Brain Games!');
    console.log(message);
    console.log('');
    userName = readlineSync.question('May I have your name?');
    console.log(`Hello, ${userName}!`);
    console.log('');
  }

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  checkUserAnswer(userAnswer, correctAnswer, func, userName, acc);
};

export default askQuestion;
