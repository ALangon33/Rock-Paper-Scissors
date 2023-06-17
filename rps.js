// Select @ random opponent choice
function getComputerChoice() {
    // Get Random # between 0 - 2
    computerDecision = Math.floor(Math.random() * 3);
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
function playRPS() {
// Request user input (Rock, Paper, or Scissors)
    playerThrow = prompt("Rock, Paper, or Scissors?");
    getComputerChoice();
    playerThrow = playerThrow.toLowerCase();
    computerThrow = computerThrow.toLowerCase();
    playerDisplay = (playerThrow.slice(0,1).toUpperCase() + playerThrow.slice(1));
    computerDisplay = (computerThrow.slice(0,1).toUpperCase() + computerThrow.slice(1));

    if (playerThrow === computerThrow) {
        // If tie display evenly matched
        alert(`Evenly Matched` + `\n` + `Tied Throw : ${playerDisplay}`);
    } else if ((playerThrow == 'rock' && computerThrow == 'paper') || (playerThrow == 'paper' && computerThrow == 'scissors') || (playerThrow == 'scissors' && computerThrow == 'rock')) {
        // If lost display defeat message
        alert(`Get Rekt` + `\n` + `Player : ${playerDisplay}` + `\n` + `CPU : ${computerDisplay}`);
        // If won display victory message
    } else {
        alert(`Victory` + `\n` + `Player : ${playerDisplay}` + `\n` + `CPU : ${computerDisplay}`);
    }

};

playRPS();

// Reveal outcome to user