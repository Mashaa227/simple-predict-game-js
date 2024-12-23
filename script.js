'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 correct number!';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

document.querySelector('.predict').value = 23;

console.log(document.querySelector('.predict').value);
*/

/* dom manipulation */

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = ' Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// document.querySelector('.predict').value = 23;

// console.log(document.querySelector('.predict').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.btnCheck').addEventListener('click', function () {
  const predict = Number(document.querySelector('.predict').value);
  console.log(predict, typeof predict);

  //when there is no in put
  if (!predict) {
    //if predict is 0 then it is a falsy value
    document.querySelector('.message').textContent = '⛔️ NO number';
  } else if (predict === secretNumber) {
    document.querySelector('.message').textContent = '🙌 you won the game';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#008080';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // if (score < 20) {
    //   score++;
    //   document.querySelector('.score').textContent = score;
    // }
  } else if (predict > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Try Again';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🫥 you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (predict < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Try Again';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🫥 you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

/*
Implement the game rest functionality, so that the player can 
make a new guess! Here is how:
1. Select the element with the again class and attach a click event handler
2. In the handler function, restore initial values of the score and secreteNumber Variable 
3. Restore the initial conditions of the message , number, score and predict input field 
4. Also restore the original background color(#222) and number width (15rem)
*/

document.querySelector('.btnagain').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start Predecting.....';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '🙈';
  document.querySelector('.predict').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
