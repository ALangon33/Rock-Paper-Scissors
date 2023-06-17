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

    if (playerThrow === computerThrow) {
        // If tie display evenly matched
        playerDisplay = (playerThrow.slice(0,1).toUpperCase() + playerThrow.slice(1));
        console.log(playerDisplay);
        alert(`Evenly Matched` + ` ` + `Tied Throw : ${playerDisplay}`);
    } else if ((playerThrow == 'rock' && computerThrow == 'paper') || (playerThrow == 'paper' && computerThrow == 'scissors') || (playerThrow == 'scissors' && computerThrow == 'rock')) {
        // If lost display defeat message
        alert(`Get Rekt` + ` ` + `Player : ${playerDisplay}`);
        // If won display victory message
    } else {
        alert("Victory");
    }

};

playRPS();

// Reveal outcome to user