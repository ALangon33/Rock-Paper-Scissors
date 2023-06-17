// Request user input (Rock, Paper, or Scissors)
function getPlayerChoice() {
    let playerThrow = prompt("Rock, Paper, or Scissors?");
};

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

// Compare user to opponent
function playRPS() {
    getPlayerChoice();
    console.log(playerThrow);
    getComputerChoice();
    console.log(computerThrow);

    if (playerThrow == 'rock' && computerThrow == 'paper') || (playerThrow == 'paper' && computerThrow == 'scissors') || (playerThrow == 'scissors' && computerThrow == 'rock') {
        // If lost display defeat message
        // If won display victory message
    }

};

// Reveal outcome to user