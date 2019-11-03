#!/usr/bin/env node

import readlineSync from 'readline-sync';

const makeIntegerNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const makeRandomExpression = (a, b, num) => {
  if (num === 1) {
    return `${a} + ${b}`;
  }
  if (num === 2) {
    return `${a} - ${b}`;
  }
  return `${a} * ${b}`;
};

const calcExpression = (a, b, num) => {
  if (num === 1) {
    return a + b;
  }
  if (num === 2) {
    return a - b;
  }
  return a * b;
};

const calcNod = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calcNod(b, a % b);
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

  const randomNumber = makeIntegerNumber(1, 100);

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

  console.log(`Question: ${makeRandomExpression(firstRandomNumber, secondRandomNumber, thirdRandomNumber)}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = `${calcExpression(firstRandomNumber, secondRandomNumber, thirdRandomNumber)}`;

  if (userAnswer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    return askCalcQestion(answerCount + 1, name);
  }

  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${name}!`);
  return askCalcQestion(0, name);
};

const askGcdQestion = (answerCount, name) => {
  if (answerCount === 3) {
    return console.log(`Congratulations, ${name}!`);
  }

  const firstRandomNumber = makeIntegerNumber(1, 100);
  const secondRandomNumber = makeIntegerNumber(1, 100);

  console.log(`Question: ${firstRandomNumber} ${secondRandomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = calcNod(firstRandomNumber, secondRandomNumber);

  if (userAnswer.toLowerCase() === String(correctAnswer)) {
    console.log('Correct!');
    return askGcdQestion(answerCount + 1, name);
  }

  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${name}!`);
  return askGcdQestion(0, name);
};

export {
  askName,
  askEvenQuestion,
  askCalcQestion,
  askGcdQestion,
};
