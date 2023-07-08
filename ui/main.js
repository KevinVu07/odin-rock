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

let playerScore = 0;
let computerScore = 0;

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (whatBeatsWhat[playerSelection] === computerSelection) {
    return "player";
  } else if (whatBeatsWhat[computerSelection] === playerSelection) {
    return "computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const winner = checkWinner(playerSelection, computerSelection);
  if (winner == "tie") {
    return "It is a tie!";
  } else if (winner == "player") {
    return `You won! ${playerSelection} beats ${computerSelection}.`;
  } else if (winner == "computer") {
    return `You lost! ${computerSelection} beats ${playerSelection}.`;
  } else {
    return "Invalid input. Selection can only be Rock, Paper, or Scissors. Please try again.";
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt("Please choose your weapon: Rock, Paper, or Scissor?").toLowerCase();
    const computerSelection = getComputerChoice();
    const result = checkWinner(playerSelection, computerSelection);
    console.log(result);
    switch (result) {
      case "player":
        playerScore++;
        console.log("You won! Player score is " + playerScore);
        break;
      case "computer":
        computerScore++;
        console.log("You lost! Computer score is " + computerScore);
        break;
      case "tie":
        console.log(`Tie. Player score is ${playerScore} and computer score is ${computerScore}`);
    }
  }
}

game();

if (playerScore > computerScore) {
  console.log("You won against the computer! The end of the Earth is not hear yet!");
} else if (computerScore > playerScore) {
  console.log("You got destroyed by Skynet! The end of mankind is near!");
} else if (computerScore === playerScore) {
  console.log("It is a tie. You are as smart as this super computer!");
}
