#!/usr/bin/env node

import askQuestion from '../engine';
import makeIntegerNumber from '../library';

// find the greatest divider for two number
const calcGcd = (firstRandom, secondRandom) => {
  if (secondRandom === 0) {
    return firstRandom;
  }
  return calcGcd(secondRandom, firstRandom % secondRandom);
};

const askGcdQestion = (acc, userName) => {
  // create 2 random number for function calcNod
  const firstRandom = makeIntegerNumber(1, 100);
  const secondRandom = makeIntegerNumber(1, 100);
  const question = `${firstRandom} ${secondRandom}`;
  const correctAnswer = `${calcGcd(firstRandom, secondRandom)}`;
  const message = 'Find the gratest common divisor of given numbers.';

  askQuestion(question, correctAnswer, askGcdQestion, userName, message, acc);
};

const startGcdGame = () => {
  askGcdQestion(1);
};

export default startGcdGame;
