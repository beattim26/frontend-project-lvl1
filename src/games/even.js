#!/usr/bin/env node

import askQuestion from '../engine';
import {
  makeIntegerNumber,
  makeGreeting,
  askUserName,
} from '../library';

// create a random integer number from min to max
const isEvenNumber = (num) => num % 2 === 0;

const askEvenQuestion = (userName, acc) => {
  const question = makeIntegerNumber(1, 100);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  askQuestion(question, correctAnswer, askEvenQuestion, userName, acc);
};

// Ask even question of user
const startEvenGame = () => {
  makeGreeting('Answer "yes" if the number is even, otherwise answer "no"');
  const userName = askUserName();

  askEvenQuestion(userName, 1);
};

export default startEvenGame;
