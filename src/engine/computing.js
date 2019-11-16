#!/usr/bin/env node

// create a random integer number from min to max
const makeIntegerNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const askAnyQuestion = (question) => console.log(`Question: ${question}`);

const checkUserAnswer = (userAnswer, correctAnswer, func, count, userName) => {
  // user answer === correct answer, call function again
  if (userAnswer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    if (count === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    return func(count + 1, userName);
  }

  // else, we inform the user that incorrect answer and call function with 0 accum
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return func(1, userName);
};

const makeGreeting = (message) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  console.log('');
};

export {
  makeIntegerNumber,
  checkUserAnswer,
  askAnyQuestion,
  makeGreeting,
};
