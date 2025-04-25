const choices = ["rock", "paper", "scissors"];
const choiceRock = 0;
const choicePaper = 1;
const choiceScissors = 2;
const resultLose = 0;
const resultDraw = 1;
const resultWin = 2;
const matches = [
  [resultDraw, resultWin, resultLose],
  [resultLose, resultDraw, resultWin],
  [resultWin, resultLose, resultDraw]
];
const maxScore = 5;

let computerScore = 0;
let humanScore = 0;
let isGameFinished = false;

const textHumanScore = document.querySelector("#human-score");
const textComputerScore = document.querySelector("#computer-score");
const textResult = document.querySelector("#result");
const textFinish = document.querySelector("#finish");

document.addEventListener('DOMContentLoaded', () => {
  textResult.textContent = "Press a button to start";
  updateTextScores();
})

function updateTextScores() {
  textHumanScore.textContent = `Player score: ${humanScore}`;
  textComputerScore.textContent = `Computer score: ${computerScore}`;
}

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (event) => {
  if (isGameFinished) {
    computerScore = 0;
    humanScore = 0;
    textFinish.textContent = "";
    isGameFinished = false;
  }

  let target = event.target;
  let humanChoice = null;

  switch(target.id) {
    case "rock":
      humanChoice = choiceRock;
      break;
    case "paper":
      humanChoice = choicePaper;
      break;
    case "scissors":
      humanChoice = choiceScissors;
      break;
  }

  playRound(getComputerChoice(), humanChoice);
});

function playRound(computerChoice, humanChoice) {
  if ((computerChoice === null) || (humanChoice === null)) {
    textResult.textContent = "Invalid choices!";
    return;
  }

  let match = matches[computerChoice][humanChoice];

  switch (match) {
    case resultLose:
      computerScore++;
      textResult.textContent = `You lose this round, ${choices[computerChoice]} beats ${choices[humanChoice]}!`;
      break;
    case resultDraw:
      textResult.textContent = "That's a draw for this round!";
      break;
    case resultWin:
      humanScore++;
      textResult.textContent = `You win this round, ${choices[humanChoice]} beats ${choices[computerChoice]}!`;
      break;
  }

  updateTextScores();

  if (humanScore === maxScore || computerScore === maxScore) {
    finishGame();
  }
}

function getComputerChoice() {
  const nChoices = 3;
  return Math.floor(Math.random() * nChoices);
}

function finishGame() {
  if (computerScore > humanScore) {
    textFinish.textContent = `\nYou lose this game ${humanScore} to ${computerScore}, better luck next time!`;
  } else {
    textFinish.textContent = `\nYou win this game ${humanScore} to ${computerScore}, congratulations!`;
  }

  isGameFinished = true;
}
