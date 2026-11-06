Rock, Papers and Scissors game by Chuka Nwachukwu

PSEUDOCODE / PLAN
Task:
Create a Rock, Paper and Scissors game where a human will play with the computer.

How does the game work?
	• Both Players will make a fist and say Rock, Papper, Scissors.
	• On scissors, both players reveal one of the three hand signs at the same time.
	• Compare the signs to determine the winner after 5 rounds.

Rules:
	• If Rock Vs Scissors, Rock wins.
	• If Paper Vs Rock, Paper wins.
	• If Scissor Vs Papers, Scissors Win


Pseudocodes
	1. Create a new Git Repository with the name: chuka-RPS-Game.
	2. Create a blank HTML Document called: index.html.
	3. Create a blank JS Document called: index.js.
	4. Link the JS Document to the HTML document using the <script> Tag. 
	5. In the JS document, Create a FUNCTION to get the computer's chioce between, Rock, Paper and Scissors, we'll call this function getComputerChoice.
	6. Create a VARIABLE called computerChoice to choose any random value between Rock, Paper and Scissors. We'll use the Math.random method.
	7. Since we have 3 values, we want to generate 3 random integers between 0 and 2 using the Math.floor method, so the FORMULAR will be Math.floor(Math.random() * 3). 
	8. IF number is equal to 0, assign to Rock.
	9. ELSE IF number is equal to 1, assign to Paper.
	10. ELSE number is equal to 2, assign to Scissors.
	11. PRINT the value of the function results to the console to see if it regenerates random numbers after every call.
	12. Create a Human's choice to enter a value between, Rock, Paper and Scissors.
	13. Create a FUNCTION called getHumanChoice with a parameter called Input.
	14. Create a VARIABLE called humanChoice.
	15. Assign this VARIABLE to a prompt and DISPLAY the statement "Please Enter Rock, Paper or Scissors".
	16. IF input is not equal to Rock, Paper or Scissors, DISPLAY the message "Wrong Input".
	17. ELSE PRINT the value of the user's choice to the console.
	18. Next we declare the player's score and create two VARIABLES and set them to 0 so we can count the score when anyone wins.
	19. One VARIABLE for the computer called computerScore.
	20. Another VARIABLE for the human called humanScore.
	21. The game will be played in mutiple rounds, so we'll create a FUNCTION to play the game for one round and call this FUNCTION again for every round. This FUNCTION will take two arguments for the Human Choice and another for the Computer Chioce.
	22. Create a FUNCTION called playRound.
	23. DEFINE two parameters, humanChoice and ComputerChoice.
	24. Make the FUNCTION for human choice case insensitive.
	25. IF human choice is Rock and Computer choice is Scissors, PRINT You win! Rock beats Scissors.
	26. Increase the humanScore by 1. 
	27. ELSE IF Computer choice is Rock and Human choice is Scissors, PRINT Computer win! Rock beats Scissors.
	28. Increase the ComputerScore by1. 
	29. IF human choice is Paper and Computer choice is Rock, PRINT You win! Paper beats Rock.
	30. Increase the humanScore by 1. 
	31. ELSE IF Computer choice is Paper and Human choice is Rock, PRINT Computer win! Paper beats Rock.
	32. Increase the ComputerScore by 1. 
	33. IF human choice is Scissors and Computer choice is Paper, PRINT You win! Scissors beats Paper.
	34. Increase the humanScore by 1. 
	35. ELSE IF Computer choice is Scissors and Human choice is Paper, PRINT Computer win! Scissors beats Paper.
	36. Increase the ComputerScore by 1.
	37. NEXT, we create a FUNCTION that plays the game called playGame.
	38. Move your playRound function and score variables so that they’re declared inside of the new playGame function
	39. Play 5 rounds by calling playRound 5 times.
	40. Basically need to play 5 rounds and increase the count for the computer score and human score for each win to keep the count.
	41. Have your game function report who won. Your function should hand back the winner’s name when the round ends, not just announce it on screen. That way the rest of your program knows the result.
	42. Set up a scoreboard before any rounds start. Give each player a score of zero. Do this outside the game function so the scores don’t reset every round.
	43. Repeat the game 5 times. Set up a loop that runs your game function once per round, five rounds in total. You can count the rounds as you go (Round 1, Round 2, and so on) to show progress.
	44. After each round, update the winner’s score. Take the winner the function reported and add one point to their score on the scoreboard.
	45. Deal with ties if they can happen. If a round ends in a draw, have the function report “no winner,” and skip adding points for that round.
	46. Show the final results. When all five rounds are finished, display each player’s total score. If you like, also announce the overall winner, which is whoever has the most points.
