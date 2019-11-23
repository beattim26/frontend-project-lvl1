#!/usr/bin/env node

import askQuestion from '../engine';
import {
  makeIntegerNumber,
  makeGreeting,
  askUserName,
} from '../library';

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

const askProgressionQuestion = (userName, acc) => {
  // create 3 random number for function makeProgression
  const firstRandomNumber = makeIntegerNumber(1, 50);
  const secondRandomNumber = makeIntegerNumber(1, 25);
  const hiddenPosition = makeIntegerNumber(2, 9);
  const question = makeProgression(firstRandomNumber, secondRandomNumber, hiddenPosition, true);
  const correctAnswer = `${makeProgression(firstRandomNumber, secondRandomNumber,
    hiddenPosition, false)}`;

  askQuestion(question, correctAnswer, askProgressionQuestion, userName, acc);
};

const startProgressionGame = () => {
  makeGreeting('What number is missing in the progression?');
  const userName = askUserName();
  askProgressionQuestion(userName, 1);
};

export default startProgressionGame;
