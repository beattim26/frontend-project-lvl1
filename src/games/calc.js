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
  const thirdRandom = makeIntegerNumber(0, 2);
  const question = `${firstRandom} ${expressionsList[thirdRandom][0]} ${secondRandom}`;
  const correctAnswer = String(expressionsList[thirdRandom][1](firstRandom, secondRandom));

  return [question, correctAnswer];
};

const startCalcGame = () => {
  startGame(createCalcQuestion, message);
};

export default startCalcGame;
