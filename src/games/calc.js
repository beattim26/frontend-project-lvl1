#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  makeGreeting,
  makeIntegerNumber,
  checkUserAnswer,
} from '../engine/computing';

// create and return random expresion in the string for question to user
const makeRandomExpression = (a, b, num) => {
  if (num === 1) {
    return `${a} + ${b}`;
  }
  if (num === 2) {
    return `${a} - ${b}`;
  }
  return `${a} * ${b}`;
};

// calculate and return random expresion in the number for answer to user
const calcExpression = (a, b, num) => {
  if (num === 1) {
    return a + b;
  }
  if (num === 2) {
    return a - b;
  }
  return a * b;
};

const askCalcQestion = (answerCount, user) => {
  // create 3 random number for function makeRandomExpression and calcExpression
  const firstRandomNumber = makeIntegerNumber(1, 25);
  const secondRandomNumber = makeIntegerNumber(1, 25);
  const thirdRandomNumber = makeIntegerNumber(1, 4);

  console.log(`Question: ${makeRandomExpression(firstRandomNumber, secondRandomNumber, thirdRandomNumber)}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = `${calcExpression(firstRandomNumber, secondRandomNumber, thirdRandomNumber)}`;

  checkUserAnswer(userAnswer, correctAnswer, askCalcQestion, answerCount, user);
};

const startCalcGame = () => {
  const name = makeGreeting('What is the result of the expression?');
  askCalcQestion(1, name);
};

export default startCalcGame;
