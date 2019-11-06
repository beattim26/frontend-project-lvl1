#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  makeGreeting,
  makeIntegerNumber,
  makeRandomExpression,
  calcExpression,
} from '../engine/computing';

const askCalc = (answerCount, user) => {
  // "answerCount" = accumulator. If "answerCount" < 3, function repeat theyself
  // else, function congats the user
  if (answerCount === 3) {
    return console.log(`Congratulations, ${user}!`);
  }

  // create 3 random number for function makeRandomExpression and calcExpression
  const firstRandomNumber = makeIntegerNumber(1, 25);
  const secondRandomNumber = makeIntegerNumber(1, 25);
  const thirdRandomNumber = makeIntegerNumber(1, 4);

  console.log(`Question: ${makeRandomExpression(firstRandomNumber, secondRandomNumber, thirdRandomNumber)}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = `${calcExpression(firstRandomNumber, secondRandomNumber, thirdRandomNumber)}`;

  // if user answer === correct answer, call function again
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return askCalc(answerCount + 1, user);
  }

  // else, we inform the user that incorrect answer and call function with 0 accum
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${user}!`);
  return askCalc(0, user);
};

const askCalcQestion = () => {
  const name = makeGreeting('calc');
  askCalc(0, name);
};

export default askCalcQestion;
