'use strict';

let answer = Math.trunc(Math.random() * 20) + 1;

let score = 20;
// console.log(number);

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess);
  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No Number !';
    } else if (guess === answer) {
      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';

      document.querySelector('.number').textContent = answer;

      document.querySelector('.message').textContent = '👍 Correct Number !';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess !== answer) {
      document.querySelector('.message').textContent =
        guess > answer ? '⬆️ Too High !' : '⬇️ Too Low !';
      score--;

      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'You Lost The Game';

    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  answer = Math.trunc(Math.random() * 20) + 1;

  score = 20;

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').value = '';
});
