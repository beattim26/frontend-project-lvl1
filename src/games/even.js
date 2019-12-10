import startGame from '../engine';
import makeIntegerNumber from '../library';

const message = 'Answer "yes" if the number is even, otherwise answer "no"';

// create a random integer number from min to max
const isEvenNumber = (num) => num % 2 === 0;

const createEvenQuestion = () => {
  const question = makeIntegerNumber(1, 100);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

// Ask even question of user
const startEvenGame = () => {
  startGame(createEvenQuestion, message);
};

export default startEvenGame;
