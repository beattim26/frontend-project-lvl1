import startGame from '../engine';
import makeIntegerNumber from '../library';

const progressionLength = 10;
const message = 'What number is missing in the progression?';

// create progression and return string of progression or hidden number in progression string
const makeProgression = (firstRandom, secondRandom, hiddenPosition, result) => {
  const progressionList = [firstRandom];

  for (let i = 1; i < progressionLength; i += 1) {
    progressionList.push(progressionList[i - 1] + secondRandom);
  }

  if (result) {
    progressionList[hiddenPosition] = '..';
    return String(progressionList.join(' '));
  }
  return String(progressionList[hiddenPosition]);
};

const askProgressionQuestion = () => {
  const createProgressionQuestion = () => {
    // create 3 random number for function makeProgression
    const firstRandom = makeIntegerNumber(1, 50);
    const secondRandom = makeIntegerNumber(1, 25);
    const hiddenPosition = makeIntegerNumber(2, 9);
    const question = makeProgression(firstRandom, secondRandom, hiddenPosition, true);
    const correctAnswer = `${makeProgression(firstRandom, secondRandom,
      hiddenPosition, false)}`;

    return [question, correctAnswer];
  };

  startGame(createProgressionQuestion, message);
};

const startProgressionGame = () => {
  askProgressionQuestion();
};

export default startProgressionGame;
