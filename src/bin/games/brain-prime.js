#!/usr/bin/env node

import { askName, askPrimeQestion } from '../questions';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
console.log('');

const name = askName();

askPrimeQestion(0, name);
