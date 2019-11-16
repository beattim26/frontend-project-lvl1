#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  makeIntegerNumber,
  checkUserAnswer,
  askAnyQuestion,
  makeGreeting,
} from '../engine/computing';

// create progression and return string of progression or hidden number in progression string
const makeProgression = (a, b, hiddenPosition, result) => {
  const progressionLength = 10;
  const progressionArr = [a];

  for (let i = 1; i < progressionLength; i += 1) {
    progressionArr.push(progressionArr[i - 1] + b);
  }

  if (result) {
    progressionArr[hiddenPosition] = '..';
    return String(progressionArr.join(' '));
  }
  return String(progressionArr[hiddenPosition]);
};

const askProgressionQuestion = (answerCount, user) => {
  // create 3 random number for function makeProgression
  const firstRandomNumber = makeIntegerNumber(1, 50);
  const secondRandomNumber = makeIntegerNumber(1, 25);
  const hiddenPosition = makeIntegerNumber(2, 9);
  const question = makeProgression(firstRandomNumber, secondRandomNumber, hiddenPosition, true);

  askAnyQuestion(question);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = `${makeProgression(firstRandomNumber, secondRandomNumber,
    hiddenPosition, false)}`;

  checkUserAnswer(userAnswer, correctAnswer, askProgressionQuestion, answerCount, user);
};

const startProgressionGame = () => {
  makeGreeting('What number is missing in the progression?');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  askProgressionQuestion(1, userName);
};

export default startProgressionGame;
