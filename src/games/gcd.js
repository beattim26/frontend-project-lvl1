import startGame from '../engine';
import makeIntegerNumber from '../library';

const message = 'Find the gratest common divisor of given numbers.';
// find the greatest divider for two number
const calcGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calcGcd(b, a % b);
};

const makeRoundGcdData = () => {
  // create 2 random number for function calcNod
  const firstRandom = makeIntegerNumber(1, 100);
  const secondRandom = makeIntegerNumber(1, 100);
  const question = `${firstRandom} ${secondRandom}`;
  const correctAnswer = String(calcGcd(firstRandom, secondRandom));

  return [question, correctAnswer];
};

const startGcdGame = () => {
  startGame(makeRoundGcdData, message);
};

export default startGcdGame;
