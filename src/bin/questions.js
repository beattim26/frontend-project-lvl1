#!/usr/bin/env node

import readlineSync from 'readline-sync';

const makeIntegerNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const makeRandomExpression = (a, b, num, type) => {
  if (num === 1 && type === 'string') {
    return `${a} + ${b}`;
  }
  if (num === 1 && type === 'number') {
    return a + b;
  }
  if (num === 2 && type === 'string') {
    return `${a} - ${b}`;
  }
  if (num === 2 && type === 'number') {
    return a - b;
  }
  if (num > 2 && type === 'string') {
    return `${a} * ${b}`;
  }
  return a * b;
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

  const firstRandomNumber = makeIntegerNumber(1, 25);
  const secondRandomNumber = makeIntegerNumber(1, 25);
  const thirdRandomNumber = makeIntegerNumber(1, 4);

  console.log(`Question: ${makeRandomExpression(firstRandomNumber, secondRandomNumber, thirdRandomNumber, 'string')}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = `${makeRandomExpression(firstRandomNumber, secondRandomNumber, thirdRandomNumber, 'number')}`;

  if (userAnswer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    return askCalcQestion(answerCount + 1, name);
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${name}!`);
  return askCalcQestion(0, name);
};

export {
  askName,
  askEvenQuestion,
  askCalcQestion,
};
