/* Instructions: STEP 1
Create a FUNCTION to get the computer's choice between, Rock, Paper and Scissors, we'll call this function getComputerChoice.
Create a VARIABLE called computerChoice to choose any random value between Rock, Paper and Scissors. We'll use the Math.random method.
Since we have 3 values, we want to generate 3 random integers between 0 and 2 using the Math.floor method, so the FORMULAR will be Math.floor(Math.random() * 3). 
IF number is equal to 0, assign to Rock.
ELSE IF number is equal to 1, assign to Paper.
ELSE number is equal to 2, assign to Scissors.
PRINT the value of the function results to the console to see if it regenerates random numbers after every call.

STEP 2:
Create a Human's choice to enter a value between, Rock, Paper and Scissors.
Create a FUNCTION called getHumanChoice with a parameter called Input.
Create a VARIABLE called humanChoice.
Assign this VARIABLE to a prompt and DISPLAY the statement "Please Enter Rock, Paper or Scissors".
IF input is not equal to Rock, Paper or Scissors, DISPLAY the message "Wrong Input".
ELSE PRINT the value of the user's choice to the console.
*/

/* STEP 3:
Next we declare the player's score and create two VARIABLES and set them to 0 so we can count the score when anyone wins.
One VARIABLE for the computer called computerScore.
Another VARIABLE for the human called humanScore.
We'll add this to the top of the code because they are Global Variables.
*/

/* STEP 4
The game will be played in mutiple rounds, so we'll create a FUNCTION to play the game for one round and call this FUNCTION again for every round. This FUNCTION will take two arguments for the Human Choice and another for the Computer Chioce.
Create a FUNCTION called playRound.
DEFINE two parameters, humanChoice and ComputerChoice.
Make the FUNCTION for human choice case insensitive by converting the response tolowerCase().
IF human choice is Rock and Computer choice is Scissors, PRINT You win! Rock beats Scissors.
Increase the humanScore by 1. 
ELSE IF Computer choice is Rock and Human choice is Scissors, PRINT Computer win! Rock beats Scissors.
Increase the ComputerScore by1. 
IF human choice is Paper and Computer choice is Rock, PRINT You win! Paper beats Rock.
Increase the humanScore by 1. 
ELSE IF Computer choice is Paper and Human choice is Rock, PRINT Computer win! Paper beats Rock.
Increase the ComputerScore by 1. 
IF human choice is Scissors and Computer choice is Paper, PRINT You win! Scissors beats Paper.
Increase the humanScore by 1. 
ELSE IF Computer choice is Scissors and Human choice is Paper, PRINT Computer win! Scissors beats Paper.
Increase the ComputerScore by 1.
*/


/* Step 5
NEXT, we create a FUNCTION that plays the game called playGame.
Move your playRound function and score variables so that they’re declared inside of the new playGame function
Play 5 rounds by calling playRound 5 times.
*/

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return computerChoice = "rock";
    } else if (computerChoice === 1) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please Enter Rock, Paper or Scissors!");
        humanChoice = humanChoice.toLowerCase();

    if (!(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")) {
        alert("Wrong Input xD"); 
        getHumanChoice();
    } else {
        return humanChoice;
    }
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win! Rock beats Scissors");
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("Computer Win! Rock beats Scissors");
        computerScore++
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats Rock");
        humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("Computer Win! Paper beats Rock");
        computerScore++
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win! Scissors beats Paper");
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("Computer Win! Scissors beats Paper");
        computerScore++
    } else {
        console.log("It's a Tie, Keep Going!");
    }
}
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);