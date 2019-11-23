#!/usr/bin/env node

import askQuestion from '../engine';
import {
  makeIntegerNumber,
  makeGreeting,
  askUserName,
} from '../library';

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

const askPrimeQuestion = (userName, acc) => {
  // create a random number for function isPrime
  const question = makeIntegerNumber(2, 3571);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  askQuestion(question, correctAnswer, askPrimeQuestion, userName, acc);
};

const startPrimeGame = () => {
  makeGreeting('Answer "yes" if given number is prime. Othervwise anser "no".');
  const userName = askUserName();
  askPrimeQuestion(userName, 1);
};

export default startPrimeGame;
