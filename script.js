const choices = ["rock", "paper", "scissors"];
const resultLose = 0;
const resultDraw = 1;
const resultWin = 2;
const matches = [
  [resultDraw, resultWin, resultLose],
  [resultLose, resultDraw, resultWin],
  [resultWin, resultLose, resultDraw]
];

let computerScore = 0;
let humanScore = 0;

function playGame() {
  const nRounds = 5;
  for (let i = 0; i < nRounds; i++) {
    playRound(getComputerChoice(), getHumanChoice());
  }

  if (computerScore > humanScore) {
    console.log(`You lose this game ${humanScore} to ${computerScore}, better luck next time!`);
  } else if (computerScore < humanScore) {
    console.log(`You win this game ${humanScore} to ${computerScore}, congratulations!`);
  } else {
    console.log("This game is a draw!");
  }
}

function playRound(computerChoice, humanChoice) {
  if ((computerChoice === null) || (humanChoice === null)) {
    console.log("Invalid choices!");
    return;
  }

  let match = matches[computerChoice][humanChoice];

  switch (match) {
    case resultLose:
      computerScore++;
      console.log(`You lose this round, ${choices[computerChoice]} beats ${choices[humanChoice]}!`);
      break;
    case resultDraw:
      console.log("That's a draw for this round!");
      break;
    case resultWin:
      humanScore++;
      console.log(`You win this round, ${choices[humanChoice]} beats ${choices[computerChoice]}!`);
      break;
  }
}

function getComputerChoice() {
  const nChoices = 3;
  return Math.floor(Math.random() * nChoices);
}

function getHumanChoice() {
  let choice = prompt("Enter your choice (rock, paper, scissors)");
  switch (choice.toLowerCase()) {
    case "rock": return 0;
    case "paper": return 1;
    case "scissors": return 2;
    default: return null;
  }
}

playGame();