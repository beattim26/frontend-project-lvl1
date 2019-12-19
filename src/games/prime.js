import startGame from '../engine';
import makeIntegerNumber from '../library';

const message = 'Answer "yes" if given number is prime. Othervwise anser "no".';
const isPrime = (num) => {
  if (num < 2 || !num) {
    return false;
  }

  const sqrtNum = Math.sqrt(num);

  for (let i = 2; i <= sqrtNum; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const makeRoundPrimeData = () => {
  const question = makeIntegerNumber(2, 3571);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startPrimeGame = () => {
  startGame(makeRoundPrimeData, message);
};

export default startPrimeGame;
