#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  makeGreeting,
  makeIntegerNumber,
  isPrime,
} from '../engine/computing';

const askPrime = (answerCount, user) => {
  // "answerCount" = accumulator. "answerCount" < 3, function repeat theyself
  // function congats the user
  if (answerCount === 3) {
    return console.log(`Congratulations, ${user}!`);
  }

  // create a random number for function isPrime
  const randomNumber = makeIntegerNumber(2, 3571);

  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  // user answer === correct answer, call function again
  if (userAnswer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    return askPrime(answerCount + 1, user);
  }

  // we inform the user that incorrect answer and call function with 0 accum
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${user}!`);
  return askPrime(0, user);
};

const askPrimeQestion = () => {
  const name = makeGreeting('prime');
  askPrime(0, name);
};

export default askPrimeQestion;
