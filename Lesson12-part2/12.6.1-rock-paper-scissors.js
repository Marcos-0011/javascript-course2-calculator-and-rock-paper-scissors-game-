let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

let isAutoPlaying = false;
let intervalID;

const autoButton = document.querySelector('.js-auto-play-button');

// 12.4.1
//const autoPlay = () => {
// using an arrow function for the first function is personal preference but a regular function is easier to read and allows hoisting
//};
function autoPlay () {
  if (!isAutoPlaying) {
    intervalID = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);

    isAutoPlaying = true;

    autoButton.innerHTML = 'Stop Playing';
  }

  else {
    clearInterval(intervalID);

    isAutoPlaying = false;

    autoButton.innerHTML = 'Auto Play';
  }
}

// 12.4.1: a common mistake here is to just do playGame('rock') for the second value. however, that will actually run the function and return undefined and that will be given to addEventListener. instead we need to give it a function, so we'll do an arrow function and inside will be playGame('rock')
document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
});

// 12 challenge
document.querySelector('.js-auto-play-button').addEventListener('click', () => {
  autoPlay();
})

document.querySelector('.js-reset-score-button')
  .addEventListener('click', () => {
    showConfirmMessage();
})

// 12.4.1 advanced functions 2 part 2: when we click a r, p, or s anywhere on the page, it will play the game. have to do body bc it will anywhere on the page. running addEventListener saves the event object and we use it as the parameter function in the second value. the event object has the key property that records what key was pressed. now go to 12.1.3 todolist files to use addEventListener
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
// 12 challenge
  } else if (event.key === 'a') {
    autoPlay();
  } else if (event.key === 'Backspace') {
    showConfirmMessage();
  }
});

// 12 challenge
function showConfirmMessage() {
  document.querySelector('.js-reset-message').innerHTML = 'Are you sure you want to reset the score? <button class="yes-button js-yes-button">Yes</button><button class="no-button js-no-button">No</button>';

  document.querySelector('.js-yes-button').addEventListener('click', () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
  
    hideConfirmMessage();
  
    updateScoreElement();
  })

  document.querySelector('.js-no-button').addEventListener('click', () => {
    hideConfirmMessage();
  })
}

function hideConfirmMessage() {
  document.querySelector('.js-reset-message').innerHTML = '';
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    } 

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    } 
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins++;
  } else if (result === 'You lose.') {
    score.losses++;
  } else if (result === 'Tie.') {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-result').innerText = `${result}`;

  document.querySelector('.js-moves').innerHTML = `You <img class="move-icon" src="images/${playerMove}-emoji.png"> <img class="move-icon" src="images/${computerMove}-emoji.png"> Computer`;

  updateScoreElement();
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >=0 && randomNumber < 1 / 3){
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

function updateScoreElement() {
  document.querySelector('.js-score').innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}