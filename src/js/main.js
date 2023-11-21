import './../scss/style.scss'
let randomNumber;
const compChoice = document.getElementById("computer-choice");
const myChoice = document.getElementById("my-choice");
const resultdisplay = document.getElementById("result");
const choices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

choices.forEach(possiblechoice => possiblechoice.addEventListener("click", (e) => {
  userChoice = e.target.id;
  myChoice.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}));

function generateComputerChoice() {
  randomNumber = Math.floor(Math.random() * choices.length) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  compChoice.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You lost";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You win";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "You lost";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "You lost";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You win";
  }
  resultdisplay.innerHTML = result;
}