var userChoice, compChoice;
var choices = [
  'rock',
  'paper',
  'scissors'
];
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('paper');

rock.addEventListener('click', function(){
  userChoice = this.id;
  compChoice = choices[(Math.random()*3).floor];

});

