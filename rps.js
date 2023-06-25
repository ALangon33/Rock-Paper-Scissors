// Test match
// matchOfGames();

function matchOfGames() {
  // Define scores
  let playerScore = 0;
  let computerScore = 0;
  let scoreKeeper;
  // play 5 games
  for (i = 0; i < 5; i++) {
    // Run a game and adjust score acordingly
    scoreKeeper = playRPS();
    console.log(`Keeper` + ` ` + `${scoreKeeper}`);
    if (scoreKeeper === 1) {
      playerScore = playerScore + 1;
    } else if (scoreKeeper === -1) {
      computerScore = computerScore + 1;
    } else {
    }
    console.log(`Player:` + ` ` + `${playerScore}`);
    console.log(`CPU:` + ` ` + `${computerScore}`);
  }

  if (playerScore === computerScore) {
    alert(
      `Match Tie` +
        `\n` +
        `\nScore: \n  Player: ${playerScore} \n  CPU: ${computerScore}`
    );
  } else if (playerScore < computerScore) {
    alert(
      `Match Loss` +
        `\n` +
        `\nScore: \n  Player: ${playerScore} \n  CPU: ${computerScore}`
    );
  } else {
    alert(
      `Match Victory` +
        `\n` +
        `\nScore: \n  Player: ${playerScore} \n  CPU: ${computerScore}`
    );
  }
}

// Compare user to opponent
function playRPS() {
  let playerThrow = prompt("Rock, Paper, or Scissors?");
  // Request user input (Rock, Paper, or Scissors)
  while (
    playerThrow != "rock" &&
    playerThrow != "paper" &&
    playerThrow != "scissors"
  ) {
    playerThrow = prompt("Rock, Paper, or Scissors?");
    playerThrow = playerThrow.toLowerCase();
  }

  // Select @ random opponent choice
  getComputerChoice();
  // Convert for comparison
  computerThrow = computerThrow.toLowerCase();

  // Recase the inputs for stylish output
  let playerDisplay =
    playerThrow.slice(0, 1).toUpperCase() + playerThrow.slice(1);
  let computerDisplay =
    computerThrow.slice(0, 1).toUpperCase() + computerThrow.slice(1);

  // Reveal outcome to user
  if (playerThrow === computerThrow) {
    // If tie display evenly matched
    let gameMessage = `Evenly Matched` + `\n` + `Tied Throw : ${playerDisplay}`;
    alert(gameMessage);
    // If even return 0
    return 0;
  } else if (
    (playerThrow == "rock" && computerThrow == "paper") ||
    (playerThrow == "paper" && computerThrow == "scissors") ||
    (playerThrow == "scissors" && computerThrow == "rock")
  ) {
    // If lost display defeat message
    let gameMessage =
      `Get Rekt` +
      `\n` +
      `Player : ${playerDisplay}` +
      `\n` +
      `CPU : ${computerDisplay}`;
    alert(gameMessage);
    // If lost return -1
    return -1;
    // If won display victory message
  } else {
    let gameMessage =
      `Victory` +
      `\n` +
      `Player : ${playerDisplay}` +
      `\n` +
      `CPU : ${computerDisplay}`;
    alert(gameMessage);
    return 1;
  }
}

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
  }
}
