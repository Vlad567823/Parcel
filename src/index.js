import { increment } from './modules/counter.js';
import { log } from './modules/logger.js';

const button = document.querySelector('#btn');
const output = document.querySelector('#output');

button.addEventListener('click', () => {
  const value = increment();
  output.textContent = value;
  log(value);
});