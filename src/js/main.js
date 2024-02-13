import './../scss/style.scss'
const compChoice = document.getElementById("computer-choice");
const myChoice = document.getElementById("my-choice");
const resultDisplay = document.getElementById("result");
const choices = document.querySelectorAll("button");

const outcomes = {
  rock: { win: "scissors", lose: "paper" },
  paper: { win: "rock", lose: "scissors" },
  scissors: { win: "paper", lose: "rock" }
};

choices.forEach(choice => choice.addEventListener("click", (e) => {
  const userChoice = e.target.id;
  myChoice.innerHTML = userChoice;
  const computerChoice = generateComputerChoice();
  const result = getResult(userChoice, computerChoice);
  resultDisplay.innerHTML = result;
}));

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomNumber].id;
  compChoice.innerHTML = computerChoice;
  return computerChoice;
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "It's a draw";
  if (outcomes[userChoice].win === computerChoice) return "You win";
  return "You lost";
}