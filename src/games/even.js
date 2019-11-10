#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  makeGreeting,
  makeIntegerNumber,
  checkUserAnswer,
} from '../engine/computing';

const askEvenQuestion = (answerCount, user) => {
  const randomNumber = makeIntegerNumber(1, 100);

  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  checkUserAnswer(userAnswer, correctAnswer, askEvenQuestion, answerCount, user);
};

// Ask even question of user
const startEvenGame = () => {
  const name = makeGreeting('Answer "yes" if the number is even, otherwise answer "no"');
  askEvenQuestion(1, name);
};

export default startEvenGame;
