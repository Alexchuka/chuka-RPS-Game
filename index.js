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

// Function to get the User's Choice
function getHumanChoice() {
  let humanChoice = prompt("Please Enter Rock, Paper or Scissors!");

  if (humanChoice === null) {
    alert("You need to enter a value to finish the game");
    return getHumanChoice();
  }
    
  humanChoice = humanChoice.toLowerCase();

  if (!(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")) {
    alert("Wrong Input.");
    return getHumanChoice();
  } else {
    return humanChoice;
  }
}

function playGame() {
  // Initialize variables to count the winner
  let computerScore = 0;
  let humanScore = 0;

  // Function to play the game for one round
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You Win! Rock beats Scissors");
      humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
      console.log("Computer Win! Rock beats Scissors");
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You Win! Paper beats Rock");
      humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      console.log("Computer Win! Paper beats Rock");
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You Win! Scissors beats Paper");
      humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      console.log("Computer Win! Scissors beats Paper");
      computerScore++;
    } else {
      console.log("It's a Tie, Keep Going!");
    }
  }

  for (let round = 1; round <= 5; round++) {
    alert(`Round: ${round}`);
    console.log(`------- Round: ${round} -------`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("You won the game"); 
  } else if (computerScore > humanScore) {
    console.log("Computer won the game"); 
  } else {
    console.log("It's a tie");
  }
}
playGame();
