#!/usr/bin/env node

import readlineSync from 'readline-sync';

// create a random integer number from min to max
const makeIntegerNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// create and return random expresion in the string for question to user
const makeRandomExpression = (a, b, num) => {
  if (num === 1) {
    return `${a} + ${b}`;
  }
  if (num === 2) {
    return `${a} - ${b}`;
  }
  return `${a} * ${b}`;
};

// calculate and return random expresion in the number for answer to user
const calcExpression = (a, b, num) => {
  if (num === 1) {
    return a + b;
  }
  if (num === 2) {
    return a - b;
  }
  return a * b;
};

// find the greatest divider for two number
const calcNod = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calcNod(b, a % b);
};

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

// check if the number is prime
const isPrime = (num) => {
  const sqrtNum = Math.sqrt(num);

  for (let i = 2; i <= sqrtNum; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// Ask name of user
const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  return userName;
};

export {
  makeIntegerNumber,
  makeRandomExpression,
  calcExpression,
  calcNod,
  makeProgression,
  isPrime,
  askName,
};
