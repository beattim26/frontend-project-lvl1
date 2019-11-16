#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  makeIntegerNumber,
  checkUserAnswer,
  askAnyQuestion,
} from '../engine/computing';

const isEvenNumber = (num) => num % 2 === 0;

const askEvenQuestion = (answerCount, user) => {
  const question = makeIntegerNumber(1, 100);

  askAnyQuestion(question);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  checkUserAnswer(userAnswer, correctAnswer, askEvenQuestion, answerCount, user);
};

// Ask even question of user
const startEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  askEvenQuestion(1, userName);
};

export default startEvenGame;
