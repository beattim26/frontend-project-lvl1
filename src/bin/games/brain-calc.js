#!/usr/bin/env node

import { askName, askCalcQestion } from '../questions';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');
console.log('');

const name = askName();

askCalcQestion(0, name);
