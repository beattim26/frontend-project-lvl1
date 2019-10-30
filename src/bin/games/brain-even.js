#!/usr/bin/env node

import { askName, askEvenQuestion } from '../questions';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no"');
console.log('');

const name = askName();

askEvenQuestion(0, name);
