#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  askName,
  makeIntegerNumber,
} from '../engine/computing';

// Ask even question of user
const askEvenQuestion = () => {
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

    const randomNumber = makeIntegerNumber(1, 100);

    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

    // if user answer === correct answer, call function again
    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      return askTask(answerCount + 1, user);
    }

    // else, we inform the user that incorrect answer and call function with 0 accum
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    return askTask(0, user);
  };
  askTask(0, name);
};

export default askEvenQuestion;
