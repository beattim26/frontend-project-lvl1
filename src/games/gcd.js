#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  makeGreeting,
  makeIntegerNumber,
  calcNod,
} from '../engine/computing';

const askGcd = (answerCount, user) => {
  // "answerCount" = accumulator. If "answerCount" < 3, function repeat theyself
  // else, function congats the user
  if (answerCount === 3) {
    return console.log(`Congratulations, ${user}!`);
  }

  // create 2 random number for function calcNod
  const firstRandomNumber = makeIntegerNumber(1, 100);
  const secondRandomNumber = makeIntegerNumber(1, 100);

  console.log(`Question: ${firstRandomNumber} ${secondRandomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = calcNod(firstRandomNumber, secondRandomNumber);

  // if user answer === correct answer, call function again
  if (userAnswer === String(correctAnswer)) {
    console.log('Correct!');
    return askGcd(answerCount + 1, user);
  }

  // else, we inform the user that incorrect answer and call function with 0 accum
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${user}!`);
  return askGcd(0, user);
};

const askGcdQestion = () => {
  const name = makeGreeting('gcd');
  askGcd(0, name);
};

export default askGcdQestion;
