'use strict';

const answer = Math.trunc(Math.random() * 100) + 1;
// console.log(number);
document.querySelector('.number').textContent = answer;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number !';
  } else if (guess === answer) {
    document.querySelector('.message').textContent = '👍 Correct Number !';
  } else if (guess > answer) {
    document.querySelector('.message').textContent = '⬆️ Too High !';
  } else if (guess < answer) {
    document.querySelector('.message').textContent = '⬇️ Too Low !';
  }
});
