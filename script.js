// Explicit mapping of winning key (i.e. "rock") beating losing value (i.e. "scissors").
const whatBeatsWhat = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

// Derive computerChoices from keys of whatBeatsWhat.
const computerChoices = Object.keys(whatBeatsWhat);

function getComputerChoice() {
  // Randomize rock paper and scissors.
  let randomizeChoice = Math.floor(Math.random() * computerChoices.length);
  // randomizeChoice will be one of [0,1,2] representing all possible indices of computerChoices.
  return computerChoices[randomizeChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It is a tie!";
  } else if (whatBeatsWhat[playerSelection] === computerSelection) {
    return `You won! ${playerSelection} beats ${computerSelection}.`;
  } else if (whatBeatsWhat[computerSelection] === playerSelection) {
    return `You lost! ${computerSelection} beats ${playerSelection}.`;
  } else {
    return "Invalid input. Selection can only be Rock, Paper, or Scissor. Please try again.";
  }
}

let playerScore = 0;
let computerScore = 0;
const computerSelection = getComputerChoice();
let playerSelection = prompt("Please choose your weapon: Rock, Paper, or Scissor?").toLowerCase();
console.log(playerSelection, computerSelection);
console.log(playerScore);
console.log(computerScore);
// console.log(playRound(playerSelection, computerSelection));

function game(playerSelection, computerSelection) {
  for (let i = 1; i <= 5; i++) {
    playRound(playerSelection, computerSelection);
    switch (playRound(playerSelection, computerSelection)) {
      case `You won! ${playerSelection} beats ${computerSelection}.`:
        playerScore++;
        break;
      case `You lost! ${computerSelection} beats ${playerSelection}.`:
        computerScore++;
        break;
      case "It is a tie!":
    }
  }
}

game(playerSelection, computerSelection);

if (playerScore > computerScore) {
  console.log("You won against the computer! The end of the Earth is not hear yet!");
} else if (computerScore > playerScore) {
  console.log("You got destroyed by Skynet! The end of mankind is near!");
} else if (computerScore === playerScore) {
  console.log("It is a tie. You are as smart as this super computer!");
}
