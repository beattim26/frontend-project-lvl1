#!/usr/bin/env node

import { askName, askProgressionQestion } from '../questions';

console.log('Welcome to the Brain Games!');
console.log('What number is missing in the progression?');
console.log('');

const name = askName();

askProgressionQestion(0, name);
