#!/usr/bin/env node

import { askName, askGcdQestion } from '../questions';

console.log('Welcome to the Brain Games!');
console.log('Find the gratest common divisor of given numbers.');
console.log('');

const name = askName();

askGcdQestion(0, name);
