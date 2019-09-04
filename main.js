var userChoice, compChoice;
var choices = [
  'rock',
  'paper',
  'scissors'
];
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var annnouncement = document.getElementById('announcement');

rock.addEventListener('click', function () {
  userChoice = this.id;
  determineWinner(userChoice)
});

paper.addEventListener('click', function () {
  userChoice = this.id;
  determineWinner(userChoice);
})

scissors.addEventListener('click', function () {
  userChoice = this.id;
  determineWinner(userChoice);
})

var determineWinner = function (userChoice) {
  var result = '';
  compChoice = choices[Math.floor(Math.random() * 3)];
  if(userChoice === compChoice) {
    annnouncement.innerHTML = 'It\'s a draw!'; 
  } else if ( (userChoice === 'rock' && compChoice === 'scissors') ||
    (userChoice === 'paper' && compChoice === 'rock') ||
    (userChoice === 'scissors' && compChoice === 'paper')) {
    annnouncement.innerHTML = 'You win! Try again?';
  } else {
    annnouncement.innerHTML = 'You lose!';
  }
}

