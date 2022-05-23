import { generateRandom } from '../utils.js';
import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2) === 0;

const generateRound = () => {
  const num = generateRandom(1, 1000);
  const question = num;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => playGame(description, generateRound);

export default startGame;
