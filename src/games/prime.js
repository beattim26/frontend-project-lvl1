import startGame from '../engine';
import makeIntegerNumber from '../library';

const message = 'Answer "yes" if given number is prime. Othervwise anser "no".';
// check if the number is prime
const isPrime = (a) => {
  const num = (a < 2 || !a) ? makeIntegerNumber(2, 3571) : a;
  const sqrtNum = Math.sqrt(num);

  for (let i = 2; i <= sqrtNum; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const makeRoundPrimeData = () => {
  // create a random number for function isPrime
  const question = makeIntegerNumber(2, 3571);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startPrimeGame = () => {
  startGame(makeRoundPrimeData, message);
};

export default startPrimeGame;
