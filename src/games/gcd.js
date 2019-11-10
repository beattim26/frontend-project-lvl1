#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  makeGreeting,
  makeIntegerNumber,
  checkUserAnswer,
} from '../engine/computing';

// find the greatest divider for two number
const calcNod = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calcNod(b, a % b);
};

const askGcdQestion = (answerCount, user) => {
  // create 2 random number for function calcNod
  const firstRandomNumber = makeIntegerNumber(1, 100);
  const secondRandomNumber = makeIntegerNumber(1, 100);

  console.log(`Question: ${firstRandomNumber} ${secondRandomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = String(calcNod(firstRandomNumber, secondRandomNumber));

  checkUserAnswer(userAnswer, correctAnswer, askGcdQestion, answerCount, user);
};

const startGcdGame = () => {
  const name = makeGreeting('Find the gratest common divisor of given numbers.');
  askGcdQestion(1, name);
};

export default startGcdGame;
