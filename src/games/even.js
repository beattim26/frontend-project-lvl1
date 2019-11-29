#!/usr/bin/env node

import askQuestion from '../engine';
import makeIntegerNumber from '../library';

// create a random integer number from min to max
const isEvenNumber = (num) => num % 2 === 0;

const askEvenQuestion = (acc, userName) => {
  const question = makeIntegerNumber(1, 100);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';
  const message = 'Answer "yes" if the number is even, otherwise answer "no"';

  askQuestion(question, correctAnswer, askEvenQuestion, userName, message, acc);
};

// Ask even question of user
const startEvenGame = () => {
  askEvenQuestion(1);
};

export default startEvenGame;
