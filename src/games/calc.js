import startGame from '../engine';
import makeIntegerNumber from '../library';

const message = 'What is the result of the expression?';
// create and calculate random expresion for question to user
const expressions = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const makeRoundCalcData = () => {
  // create 3 random number for function makeRandomExpression and calcExpression
  const firstRandom = makeIntegerNumber(2, 25);
  const secondRandom = makeIntegerNumber(2, 25);
  const indexExpression = makeIntegerNumber(0, expressions.length - 1);
  const expression = expressions[indexExpression][0];
  const calcExpression = expressions[indexExpression][1];
  const question = `${firstRandom} ${expression} ${secondRandom}`;
  const correctAnswer = String(calcExpression(firstRandom, secondRandom));

  return [question, correctAnswer];
};

const startCalcGame = () => {
  startGame(makeRoundCalcData, message);
};

export default startCalcGame;
