// Adversary Function
function getComputerChoice(rock, paper, scissor) {
    const x = Math.random();
    if (x < 0.33) {
        return rock;
    } else if (x < 0.66) {
        return paper;
    } else {
        return scissor;
    }
}

// test log
//console.log(getComputerChoice("rock", "paper", "scissor"));

// User function
function getHumanChoice() {
    return prompt("Rock, Paper or Scissor?");
}

// Test log
//console.log(getHumanChoice())

// Score Variables
let humanScore=0;
let computerScore=0;

// Game Function
function playGame() {
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
    
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if ((humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {    // Score
        humanScore++;
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
        }
    }
    // Rounds Counter
    for (let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice("rock", "paper", "scissor");
        playRound(humanChoice, computerChoice);
    } // Test log
    console.log(`Final Score: Human - ${humanScore}, Computer - ${computerScore}`);
}
playGame();