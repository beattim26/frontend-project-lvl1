import startGame from '../engine';
import makeIntegerNumber from '../library';

const progressionLength = 10;
const message = 'What number is missing in the progression?';

// create progression and return string of progression or hidden number in progression string
const makeProgressionQuestion = (a, b, hiddenElementPosition, length) => {
  const progressions = [];

  for (let i = 0; i < length; i += 1) {
    progressions.push(a + b * i);
  }

  progressions[hiddenElementPosition] = '..';

  return progressions.join(' ');
};

const makeRoundProgressionData = () => {
  // create 3 random number for function makeProgression
  const firstRandom = makeIntegerNumber(1, 50);
  const secondRandom = makeIntegerNumber(2, 25);
  const hiddenElementPosition = makeIntegerNumber(1, progressionLength - 1);
  const question = makeProgressionQuestion(firstRandom, secondRandom, hiddenElementPosition,
    progressionLength);
  const correctAnswer = String(firstRandom + secondRandom * hiddenElementPosition);

  return [question, correctAnswer];
};

const startProgressionGame = () => {
  startGame(makeRoundProgressionData, message);
};

export default startProgressionGame;
