import readlineSync from 'readline-sync';

const questionsCount = 3;

const startGame = (makeQuestionData, message) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  console.log('');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('');

  const iter = (counter) => {
    if (counter > questionsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const questionData = makeQuestionData();
    const [question, correctAnswer] = questionData;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      iter(counter + 1);
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      iter(1);
    }
  };

  iter(1);
};

export default startGame;
