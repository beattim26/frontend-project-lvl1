#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no"');
console.log('');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('');

const makeIntegerNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEvenQuestion = (answerCount) => {
  const minNumber = 1;
  const maxNumber = 100;
  const randomNumber = makeIntegerNumber(minNumber, maxNumber);

  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  if (userAnswer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    if (answerCount === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    return isEvenQuestion(answerCount + 1);
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return isEvenQuestion(1);
};

isEvenQuestion(1);
