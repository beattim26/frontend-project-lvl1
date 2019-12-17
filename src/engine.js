import readlineSync from 'readline-sync';

const questionCount = 3;

const startGame = (makeQuestion, message) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  console.log('');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('');

  const iter = (counter = 1) => {
    if (counter > questionCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const questionData = makeQuestion();
    const question = questionData[0];
    const correctAnswer = questionData[1];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    // user answer === correct answer, call function againh
    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      iter(counter + 1);
    } else {
      // else, we inform the user that incorrect answer and call function with 0 accum
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      iter();
    }
  };

  iter();
};

export default startGame;
