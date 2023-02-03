'use strict';

const answer = Math.trunc(Math.random() * 20) + 1;

let score = 20;
// console.log(number);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No Number !';
    } else if (guess === answer) {
      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';

      document.querySelector('.number').textContent = answer;

      document.querySelector('.message').textContent = '👍 Correct Number !';
    } else if (guess > answer) {
      document.querySelector('.message').textContent = '⬆️ Too High !';
      score--;

      document.querySelector('.score').textContent = score;
    } else if (guess < answer) {
      document.querySelector('.message').textContent = '⬇️ Too Low !';
      score--;

      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'You Lost The Game';

    document.querySelector('.score').textContent = 0;
  }
});
