import startGame from '../engine';
import makeIntegerNumber from '../library';

const message = 'Find the gratest common divisor of given numbers.';
// find the greatest divider for two number
const calcGcd = (firstRandom, secondRandom) => {
  if (secondRandom === 0) {
    return firstRandom;
  }
  return calcGcd(secondRandom, firstRandom % secondRandom);
};

const askGcdQestion = () => {
  const createGcdQuestion = () => {
    // create 2 random number for function calcNod
    const firstRandom = makeIntegerNumber(1, 100);
    const secondRandom = makeIntegerNumber(1, 100);
    const question = `${firstRandom} ${secondRandom}`;
    const correctAnswer = `${calcGcd(firstRandom, secondRandom)}`;

    return [question, correctAnswer];
  };

  startGame(createGcdQuestion, message);
};

const startGcdGame = () => {
  askGcdQestion();
};

export default startGcdGame;
