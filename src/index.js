import { increment } from '../modules/counter';
import { log } from '../modules/logger';

const button = document.querySelector('#btn');
const output = document.querySelector('#output');

button.addEventListener('click', () => {
  const value = increment();
  output.textContent = value;
  log(value);
});