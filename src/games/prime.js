#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  makeGreeting,
  makeIntegerNumber,
  checkUserAnswer,
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
  const randomNumber = makeIntegerNumber(2, 3571);

  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  checkUserAnswer(userAnswer, correctAnswer, askPrimeQuestion, answerCount, user);
};

const startPrimeGame = () => {
  const name = makeGreeting('Answer "yes" if given number is prime. Othervwise anser "no".');
  askPrimeQuestion(1, name);
};

export default startPrimeGame;
