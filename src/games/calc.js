#!/usr/bin/env node

import askQuestion from '../engine';
import makeIntegerNumber from '../library';

// create and return random expresion in the string for question to user
const makeRandomExpression = (a, b) => [`${a} + ${b}`, `${a} - ${b}`, `${a} * ${b}`];

// calculate and return random expresion in the number for answer to user
const calcExpression = (a, b) => [a + b, a - b, a * b];

const askCalcQestion = (acc, userName) => {
  // create 3 random number for function makeRandomExpression and calcExpression
  const firstRandom = makeIntegerNumber(1, 25);
  const secondRandom = makeIntegerNumber(1, 25);
  const thirdRandom = makeIntegerNumber(0, 3);
  const question = makeRandomExpression(firstRandom, secondRandom)[thirdRandom];
  const correctAnswer = `${calcExpression(firstRandom, secondRandom)[thirdRandom]}`;
  const message = 'What is the result of the expression?';

  askQuestion(question, correctAnswer, askCalcQestion, userName, message, acc);
};

const startCalcGame = () => {
  askCalcQestion(1);
};

export default startCalcGame;
