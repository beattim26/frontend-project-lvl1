import readlineSync from 'readline-sync';

const quantityQuestions = 3;

const startGame = (makeQuestion, message) => {
  const iter = (func, userName, acc = 0) => {
    if (acc > quantityQuestions) {
      console.log(`Congratulations, ${userName}!`);
      return null;
    }

    if (acc < 1) {
      console.log('Welcome to the Brain Games!');
      console.log(message);
      console.log('');
      const name = readlineSync.question('May I have your name?');
      console.log(`Hello, ${name}!`);
      console.log('');

      return iter(func, name, 1);
    }

    const question = makeQuestion();
    console.log(`Question: ${question[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    // user answer === correct answer, call function again
    if (userAnswer.toLowerCase() === question[1]) {
      console.log('Correct!');
      return iter(func, userName, acc + 1);
    }

    // else, we inform the user that incorrect answer and call function with 0 accum
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${question[1]}.`);
    return iter(func, userName, 1);
  };

  iter(makeQuestion);
};

export default startGame;
