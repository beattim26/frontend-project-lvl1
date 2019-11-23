#!/usr/bin/env node

import askQuestion from '../engine';
import {
  makeIntegerNumber,
  makeGreeting,
  askUserName,
} from '../library';

// create and return random expresion in the string for question to user
const makeRandomExpression = (a, b, num) => {
  switch (num) {
    case 1:
      return `${a} + ${b}`;
    case 2:
      return `${a} - ${b}`;
    default:
      return `${a} * ${b}`;
  }
};

// calculate and return random expresion in the number for answer to user
const calcExpression = (a, b, num) => {
  switch (num) {
    case 1:
      return a + b;
    case 2:
      return a - b;
    default:
      return a * b;
  }
};

const askCalcQestion = (userName, acc) => {
  // create 3 random number for function makeRandomExpression and calcExpression
  const firstRandomNumber = makeIntegerNumber(1, 25);
  const secondRandomNumber = makeIntegerNumber(1, 25);
  const thirdRandomNumber = makeIntegerNumber(1, 4);
  const question = makeRandomExpression(firstRandomNumber, secondRandomNumber, thirdRandomNumber);
  const correctAnswer = `${calcExpression(firstRandomNumber, secondRandomNumber, thirdRandomNumber)}`;

  askQuestion(question, correctAnswer, askCalcQestion, userName, acc);
};

const startCalcGame = () => {
  makeGreeting('What is the result of the expression?');
  const userName = askUserName();
  askCalcQestion(userName, 1);
};

export default startCalcGame;
