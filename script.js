// Track player and computer scores
let playerScore = 0;
let computerScore = 0;

// Function to randomly return 'rock', 'paper', or 'scissors' for the computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner of a single round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        computerScore++;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

// Function to update the UI with the result and scores
function updateResult(message) {
    const resultDiv = document.getElementById('result');
    const scoreDiv = document.getElementById('score');
    resultDiv.textContent = message; // Show the result of the round
    scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`; // Update scores
}

// Function to check if someone has won the game
function checkWinner() {
    if (playerScore === 5) {
        updateResult("Congratulations! You won the game!");
        disableButtons(); // Stop the game once someone wins
    } else if (computerScore === 5) {
        updateResult("Oh no! The computer won the game!");
        disableButtons(); // Stop the game once someone wins
    }
}

// Function to handle when the player makes a choice
function makeChoice(playerSelection) {
    if (playerScore < 5 && computerScore < 5) {
        const computerSelection = getComputerChoice();
        const resultMessage = playRound(playerSelection, computerSelection);
        updateResult(resultMessage);
        checkWinner(); // Check if someone won after each round
    }
}

// Disable buttons when the game is over
function disableButtons() {
    document.getElementById('rockBtn').disabled = true;
    document.getElementById('paperBtn').disabled = true;
    document.getElementById('scissorsBtn').disabled = true;
}

// Add a reset function to restart the game (optional)
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateResult("Game reset! Make your choice.");
    document.getElementById('score').textContent = 'Player: 0 - Computer: 0';
    document.getElementById('rockBtn').disabled = false;
    document.getElementById('paperBtn').disabled = false;
    document.getElementById('scissorsBtn').disabled = false;
}
