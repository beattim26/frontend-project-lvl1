import startGame from '../engine';
import makeIntegerNumber from '../library';

const progressionLength = 10;
const message = 'What number is missing in the progression?';

// create progression and return string of progression or hidden number in progression string
const makeProgression = (firstRandom, secondRandom, hiddenPosition, result) => {
  const progressionList = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progressionList.push(firstRandom + (secondRandom * i));
  }

  if (result) {
    progressionList[hiddenPosition] = '..';
    return String(progressionList.join(' '));
  }
  return String(progressionList[hiddenPosition]);
};

const createProgressionQuestion = () => {
  // create 3 random number for function makeProgression
  const firstRandom = makeIntegerNumber(1, 50);
  const secondRandom = makeIntegerNumber(2, 25);
  const hiddenPosition = makeIntegerNumber(1, 9);
  const question = makeProgression(firstRandom, secondRandom, hiddenPosition, true);
  const correctAnswer = makeProgression(firstRandom, secondRandom,
    hiddenPosition, false);

  return [question, correctAnswer];
};

const startProgressionGame = () => {
  startGame(createProgressionQuestion, message);
};

export default startProgressionGame;
