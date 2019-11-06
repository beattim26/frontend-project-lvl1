#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  makeGreeting,
  makeIntegerNumber,
  makeProgression,
} from '../engine/computing';

const askProgressionQestion = () => {
  const name = makeGreeting('progression');
  const askTask = (answerCount, user) => {
    // "answerCount" = accumulator. If "answerCount" < 3, function repeat theyself
    // else, function congats the user
    if (answerCount === 3) {
      return console.log(`Congratulations, ${user}!`);
    }

    // create 3 random number for function makeProgression
    const firstRandomNumber = makeIntegerNumber(1, 50);
    const secondRandomNumber = makeIntegerNumber(1, 25);
    const hiddenPosition = makeIntegerNumber(2, 9);

    console.log(`Question: ${makeProgression(firstRandomNumber, secondRandomNumber, hiddenPosition, true)}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = makeProgression(firstRandomNumber, secondRandomNumber,
      hiddenPosition, false);

    // if user answer === correct answer, call function again
    if (userAnswer === String(correctAnswer)) {
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

export default askProgressionQestion;
