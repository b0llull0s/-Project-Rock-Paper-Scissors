// * Adversary Function
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
    
// * test log
console.log(getComputerChoice("rock", "paper", "scissor"));