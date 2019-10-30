#!/usr/bin/env node

import readlineSync from 'readline-sync';

const makeIntegerNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const makeRandomExpression = () => {
  const randomNum = makeIntegerNumber(1, 4);
  if (randomNum === 1) {
    return '+';
  }
  if (randomNum === 2) {
    return '-';
  }
  return '*';
};

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  return userName;
};

const askEvenQuestion = (answerCount, name) => {
  if (answerCount === 3) {
    return console.log(`Congratulations, ${name}!`);
  }

  const minNumber = 1;
  const maxNumber = 100;
  const randomNumber = makeIntegerNumber(minNumber, maxNumber);

  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  if (userAnswer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    return askEvenQuestion(answerCount + 1, name);
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return askEvenQuestion(0, name);
};

const askCalcQestion = (answerCount, name) => {
  if (answerCount === 3) {
    return console.log(`Congratulations, ${name}!`);
  }

  const minNumber = 1;
  const maxNumber = 25;
  const firstRandomNumber = makeIntegerNumber(minNumber, maxNumber);
  const secondRandomNumber = makeIntegerNumber(minNumber, maxNumber);
  const randomExpression = makeRandomExpression();

  console.log(`Question: ${firstRandomNumber} ${randomExpression} ${secondRandomNumber}`);
};

export {
  askName,
  askEvenQuestion,
  askCalcQestion,
};
