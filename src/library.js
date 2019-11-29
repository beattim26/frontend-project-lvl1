#!/usr/bin/env node

const makeIntegerNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default makeIntegerNumber;
