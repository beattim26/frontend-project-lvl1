import startGame from '../engine';
import makeIntegerNumber from '../library';

const message = 'Find the gratest common divisor of given numbers.';
const calcGcd = (first, second) => {
  if (second === 0) {
    return first;
  }
  return calcGcd(second, first % second);
};

const makeRoundGcdData = () => {
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
