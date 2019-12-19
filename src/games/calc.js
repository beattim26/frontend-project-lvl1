import startGame from '../engine';
import makeIntegerNumber from '../library';

const message = 'What is the result of the expression?';
const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const makeRoundCalcData = () => {
  const firstRandom = makeIntegerNumber(2, 25);
  const secondRandom = makeIntegerNumber(2, 25);
  const indexOperation = makeIntegerNumber(0, operations.length - 1);
  const [operation, calcOperation] = operations[indexOperation];
  const question = `${firstRandom} ${operation} ${secondRandom}`;
  const correctAnswer = String(calcOperation(firstRandom, secondRandom));

  return [question, correctAnswer];
};

const startCalcGame = () => {
  startGame(makeRoundCalcData, message);
};

export default startCalcGame;
