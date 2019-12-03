import startGame from '../engine';
import makeIntegerNumber from '../library';

const message = 'Answer "yes" if the number is even, otherwise answer "no"';
// create a random integer number from min to max
const isEvenNumber = (num) => num % 2 === 0;

const askEvenQuestion = () => {
  const createEvenQuestion = () => {
    const question = makeIntegerNumber(1, 100);
    const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

    return [question, correctAnswer];
  };

  startGame(createEvenQuestion, message);
};

// Ask even question of user
const startEvenGame = () => {
  askEvenQuestion();
};

export default startEvenGame;
