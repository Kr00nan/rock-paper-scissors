var userChoice, compChoice;
var w = 0;
var l = 0;
var d = 0;
var choices = [
  'rock',
  'paper',
  'scissors'
];
var wp = document.getElementById('wp');
var lp = document.getElementById('lp');
var tp = document.getElementById('tp');
var tg = document.getElementById('tg');

var wins = document.getElementById('wins');
wins.innerHTML = w;
var losses = document.getElementById('losses');
losses.innerHTML = l;
var draws = document.getElementById('draws');
draws.innerHTML = d;

var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var annnouncement = document.getElementById('announcement');

rock.addEventListener('click', function () {
  userChoice = this.id;
  determineWinner(userChoice);
  doTheMath();
});

paper.addEventListener('click', function () {
  userChoice = this.id;
  determineWinner(userChoice);
  doTheMath();
})

scissors.addEventListener('click', function () {
  userChoice = this.id;
  determineWinner(userChoice);
  doTheMath();
})

var determineWinner = function (userChoice) {
  compChoice = choices[Math.floor(Math.random() * 3)];
  // logic to determine winner, change the text of the announcement,
  // and increment the win/lose/draw totals
  if(userChoice === compChoice) {
    annnouncement.innerHTML = `It's a draw! You both picked ${userChoice}!`;
    draws.innerHTML = ++d;
    annnouncement.classList.remove('green', 'red');
  } else if ( (userChoice === 'rock' && compChoice === 'scissors') ||
    (userChoice === 'paper' && compChoice === 'rock') ||
    (userChoice === 'scissors' && compChoice === 'paper')) {
    annnouncement.innerHTML = `You chose ${userChoice}, the computer chose ${compChoice}. You win!`;
    wins.innerHTML = ++w;
    if (annnouncement.classList.contains('red')) {
      annnouncement.classList.remove('red');
    }
    annnouncement.classList.add('green');
  } else {
    annnouncement.innerHTML = `You chose ${userChoice}, the computer chose ${compChoice}. You lose!`;
    losses.innerHTML = ++l;
    if (annnouncement.classList.contains('green')){
      annnouncement.classList.remove('green');
    }
    annnouncement.classList.add('red');
  }
}

// reset button: resets the win/lose/draw stats and
// removes the classes from the announcement element.
var btn = document.getElementById('reset');
btn.addEventListener('click', function() {
  w = 0;
  l = 0;
  d = 0;
  wins.innerHTML = w;
  losses.innerHTML = l;
  draws.innerHTML = d;
  wp.innerHTML = `Win Percentage: 0`;
  lp.innerHTML = `Loss Percentage: 0`;
  tp.innerHTML = `Tie Percentage: 0`;
  tg.innerHTML = `Total Games: 0`;
  annnouncement.innerHTML = 'Game has been reset.';
  annnouncement.classList.remove('green','red')
})

// calculates the percentages of win/lose/draw
// still need to figure out formatting into percentages...
var doTheMath = function() {
  wp.innerHTML = `Win Percentage: ${parseFloat(w/(w+l+d)).toFixed(2)}%`;
  lp.innerHTML = `Loss Percentage: ${parseFloat(l/(w+l+d)).toFixed(2)}%`;
  tp.innerHTML = `Tie Percentage: ${parseFloat(d/(w+l+d)).toFixed(2)}%`;
  tg.innerHTML = `Total Games: ${w + l + d}`;
}
