// Add the Variables to Manipulate
const choiceBtns = document.querySelectorAll(".choice");
const roundResult = document.querySelector("#roundResult");
const score = document.querySelector("#score");
const finalResult = document.querySelector("#finalResult");
const resetBtn = document.querySelector("#reset");

// Initialize variables to count the winner
const WINNING_SCORE = 5;
let computerScore = 0;
let humanScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return (computerChoice = "rock");
  } else if (computerChoice === 1) {
    return (computerChoice = "paper");
  } else {
    return (computerChoice = "scissors");
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You Win! Rock beats Scissors";
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    computerScore++;
    return "Computer Win! Rock beats Scissors";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "You Win! Paper beats Rock";
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    computerScore++;
    return "Computer Win! Paper beats Rock";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You Win! Scissors beats Paper";
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    computerScore++;
    return "Computer Win! Scissors beats Paper";
  } else {
    return "It's a Tie, Keep Going!";
  }
}

function updateDisplay(humanChoice, computerChoice, message) {
  roundResult.textContent = `You Chose ${humanChoice}, Computer Chose ${computerChoice}. ${message}`;
  score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
}

//Function to check for winners
function checkForWinner() {
  if (humanScore === WINNING_SCORE || computerScore === WINNING_SCORE) {
    finalResult.textContent =
      humanScore > computerScore
        ? "You won the Game!"
        : "Computer Won the Game!";
    choiceBtns.forEach((button) => (button.disabled = true));
    resetBtn.hidden = false;
  }
}

// Reset the Game
function resetGame() {
  humanScore = 0;
  computerScore = 0;

  roundResult.textContent =
    "Click Rock, Paper, or Scissors to start, The first to 5 Wins!";
  score.textContent = "You: 0 | Computer: 0";
  finalResult.textContent = "";

  choiceBtns.forEach((button) => (button.disabled = false));
  resetBtn.hidden = true;
}

// Event Listeners
choiceBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    const computerChoice = getComputerChoice();
    const message = playRound(humanChoice, computerChoice);

    updateDisplay(humanChoice, computerChoice, message);
    checkForWinner();
  });
});

resetBtn.addEventListener("click", resetGame);
