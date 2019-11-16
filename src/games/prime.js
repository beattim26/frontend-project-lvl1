#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  makeIntegerNumber,
  checkUserAnswer,
  askAnyQuestion,
  makeGreeting,
  askUserName,
} from '../engine/computing';

// check if the number is prime
const isPrime = (num) => {
  const sqrtNum = Math.sqrt(num);

  for (let i = 2; i <= sqrtNum; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const askPrimeQuestion = (answerCount, user) => {
  // create a random number for function isPrime
  const question = makeIntegerNumber(2, 3571);

  askAnyQuestion(question);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  checkUserAnswer(userAnswer, correctAnswer, askPrimeQuestion, answerCount, user);
};

const startPrimeGame = () => {
  makeGreeting('Answer "yes" if given number is prime. Othervwise anser "no".');
  const userName = askUserName();
  askPrimeQuestion(1, userName);
};

export default startPrimeGame;
