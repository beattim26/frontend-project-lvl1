#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  makeGreeting,
  makeIntegerNumber,
} from '../engine/computing';

const askEven = (answerCount, user) => {
  // "answerCount" = accumulator."answerCount" < 3, function repeat theyself
  // function congats the user
  if (answerCount === 3) {
    return console.log(`Congratulations, ${user}!`);
  }

  const randomNumber = makeIntegerNumber(1, 100);

  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  // user answer === correct answer, call function again
  if (userAnswer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    return askEven(answerCount + 1, user);
  }

  // else, we inform the user that incorrect answer and call function with 0 accum
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return askEven(0, user);
};

// Ask even question of user
const askEvenQuestion = () => {
  const name = makeGreeting('even');
  askEven(0, name);
};

export default askEvenQuestion;
