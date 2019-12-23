import playGame from '../engine';
import makeIntegerNumber from '../library';

const progressionLength = 10;
const message = 'What number is missing in the progression?';

const makeQuestion = (first, second, hiddenElementPosition, length) => {
  const progressions = [];

  for (let i = 0; i < length; i += 1) {
    progressions.push(first + second * i);
  }

  progressions[hiddenElementPosition] = '..';

  return progressions.join(' ');
};

const makeRoundProgressionData = () => {
  const firstRandom = makeIntegerNumber(1, 50);
  const secondRandom = makeIntegerNumber(2, 25);
  const hiddenElementPosition = makeIntegerNumber(1, progressionLength - 1);
  const question = makeQuestion(firstRandom, secondRandom, hiddenElementPosition,
    progressionLength);
  const correctAnswer = String(firstRandom + secondRandom * hiddenElementPosition);

  return [question, correctAnswer];
};

const startProgressionGame = () => {
  playGame(makeRoundProgressionData, message);
};

export default startProgressionGame;
