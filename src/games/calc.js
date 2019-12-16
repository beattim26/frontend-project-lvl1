import startGame from '../engine';
import makeIntegerNumber from '../library';

const message = 'What is the result of the expression?';
// create and calculate random expresion for question to user
const expressionsList = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const createCalcQuestion = () => {
  // create 3 random number for function makeRandomExpression and calcExpression
  const firstRandom = makeIntegerNumber(2, 25);
  const secondRandom = makeIntegerNumber(2, 25);
  const indexExpression = makeIntegerNumber(0, expressionsList.length - 1);
  const expressionString = expressionsList[indexExpression][0];
  const expressionResult = expressionsList[indexExpression][1](firstRandom, secondRandom);
  const question = `${firstRandom} ${expressionString} ${secondRandom}`;
  const correctAnswer = String(expressionResult);

  return [question, correctAnswer];
};

const startCalcGame = () => {
  startGame(createCalcQuestion, message);
};

export default startCalcGame;
