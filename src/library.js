#!/usr/bin/env node

import readlineSync from 'readline-sync';

const makeIntegerNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const makeGreeting = (message) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  console.log('');
};

const askUserName = () => {
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('');

  return userName;
};

export {
  makeIntegerNumber,
  makeGreeting,
  askUserName,
};
