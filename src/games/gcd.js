#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  makeIntegerNumber,
  checkUserAnswer,
  askAnyQuestion,
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
  const question = `${firstRandomNumber} ${secondRandomNumber}`;

  askAnyQuestion(question);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = `${calcNod(firstRandomNumber, secondRandomNumber)}`;

  checkUserAnswer(userAnswer, correctAnswer, askGcdQestion, answerCount, user);
};

const startGcdGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the gratest common divisor of given numbers.');
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  askGcdQestion(1, userName);
};

export default startGcdGame;
