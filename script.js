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
    prompt("Rock, Paper or Scissor?");
}

// Test log
//console.log(getHumanChoice())

// Score Variables
let humanScore=0;
let computerScore=0;

// Playround function
function playRound(humanChoice, ComputerChoice) {

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);