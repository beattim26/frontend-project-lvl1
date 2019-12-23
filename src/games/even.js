import playGame from '../engine';
import makeIntegerNumber from '../library';

const message = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (num) => num % 2 === 0;

const makeRoundEvenData = () => {
  const question = makeIntegerNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startEvenGame = () => {
  playGame(makeRoundEvenData, message);
};

export default startEvenGame;
