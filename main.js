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

rock.addEventListener('click', function(){
  userChoice = this.id;
  determineWinner(userChoice)
});

paper.addEventListener('click', function(){
  userChoice = this.id;
  determineWinner(userChoice);
})

scissors.addEventListener('click', function(){
  userChoice = this.id;
  determineWinner(userChoice);
})

var determineWinner = function(userChoice){
  var result = '';
  compChoice = choices[Math.floor(Math.random()*3)];
  if (userChoice === compChoice) {
    result = 'It\'s a draw!';
  }
  annnouncement.innerHTML = result;
}

