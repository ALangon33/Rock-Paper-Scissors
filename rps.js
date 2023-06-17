// Request user input (Rock, Paper, or Scissors)
// Select @ random opponent choice
function getComputerChoice() {
    // Get Random # between 0 - 2
    let computerDecision = Math.floor(Math.random() * 3);


    // If 0 : Rock, if 1 : Paper, else Scissors
    if (computerDecision === 0) {
        computerThrow = "Rock";
    } else if (computerDecision === 1) {
        computerThrow = "Paper";
    } else {
        computerThrow = "Scissors";
    };

};
// Compare user to opponent
// Reveal outcome to user