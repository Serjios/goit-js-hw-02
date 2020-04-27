'use strict';

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число');
  if (input === null) break;
  input = Number(input);
  numbers.push(input);
}

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Общая сумма чисел равна ${total}`);
}
