// Request user input (Rock, Paper, or Scissors)
let playerChoice = prompt("Rock, Paper, or Scissors?");
// Select @ random opponent choice
function getComputerChoice() {
    // Get Random # between 0 - 2
    let computerDecision = Math.floor(Math.random() * 3);
    console.log(computerDecision);

    // If 0 : Rock, if 1 : Paper, else Scissors
    if (computerDecision === 0) {
        computerThrow = "Rock";
    } else if (computerDecision === 1) {
        computerThrow = "Paper";
    } else {
        computerThrow = "Scissors";
    };
    console.log(computerThrow);

};

getComputerChoice();
// Compare user to opponent
function playRPS() {

};

// Reveal outcome to user