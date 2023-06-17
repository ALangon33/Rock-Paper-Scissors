// Select @ random opponent choice
function getComputerChoice() {
    // Get Random # between 0 - 2
    computerDecision = Math.floor(Math.random() * 3);
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
// Request user input (Rock, Paper, or Scissors)
    playerThrow = prompt("Rock, Paper, or Scissors?");
    console.log(playerThrow);
    getComputerChoice();
    console.log(computerThrow);

    if ((playerThrow == 'rock' && computerThrow == 'paper') || (playerThrow == 'paper' && computerThrow == 'scissors') || (playerThrow == 'scissors' && computerThrow == 'rock')) {
        // If lost display defeat message
        console.log("Get Rekt");
        // If won display victory message
    } else {
        console.log("Victory");
    }

};

playRPS();

// Reveal outcome to user