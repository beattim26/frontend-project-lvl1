#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  makeIntegerNumber,
  makeRandomExpression,
  calcExpression,
  calcNod,
  makeProgression,
} from './computing';

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

  if (userAnswer === correctAnswer) {
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

  if (userAnswer === String(correctAnswer)) {
    console.log('Correct!');
    return askGcdQestion(answerCount + 1, name);
  }

  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${name}!`);
  return askGcdQestion(0, name);
};

const askProgressionQestion = (answerCount, name) => {
  if (answerCount === 3) {
    return console.log(`Congratulations, ${name}!`);
  }

  const firstRandomNumber = makeIntegerNumber(1, 50);
  const secondRandomNumber = makeIntegerNumber(1, 25);
  const hiddenPosition = makeIntegerNumber(2, 9);

  console.log(`Question: ${makeProgression(firstRandomNumber, secondRandomNumber, hiddenPosition, true)}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = makeProgression(firstRandomNumber, secondRandomNumber,
    hiddenPosition, false);

  if (userAnswer === String(correctAnswer)) {
    console.log('Correct!');
    return askProgressionQestion(answerCount + 1, name);
  }

  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${name}!`);
  return askProgressionQestion(0, name);
};

export {
  askName,
  askEvenQuestion,
  askCalcQestion,
  askGcdQestion,
  askProgressionQestion,
};
