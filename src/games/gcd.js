#!/usr/bin/env node

import askQuestion from '../engine';
import {
  makeIntegerNumber,
  makeGreeting,
  askUserName,
} from '../library';

// find the greatest divider for two number
const calcNod = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calcNod(b, a % b);
};

const askGcdQestion = (userName, acc) => {
  // create 2 random number for function calcNod
  const firstRandomNumber = makeIntegerNumber(1, 100);
  const secondRandomNumber = makeIntegerNumber(1, 100);
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = `${calcNod(firstRandomNumber, secondRandomNumber)}`;

  askQuestion(question, correctAnswer, askGcdQestion, userName, acc);
};

const startGcdGame = () => {
  makeGreeting('Find the gratest common divisor of given numbers.');
  const userName = askUserName();
  askGcdQestion(userName, 1);
};

export default startGcdGame;
