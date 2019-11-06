#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  askName,
  makeIntegerNumber,
  makeRandomExpression,
  calcExpression,
} from '../engine/computing';

const askCalcQestion = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  console.log('');

  const name = askName();
  const askTask = (answerCount, user) => {
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
      return askTask(answerCount + 1, user);
    }

    // else, we inform the user that incorrect answer and call function with 0 accum
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${user}!`);
    return askTask(0, user);
  };
  askTask(0, name);
};

export default askCalcQestion;
