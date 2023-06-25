const buttons = document.querySelectorAll('.button');
const matchOutputCon = document.querySelector('#match-outcome-container')
const matchOutput = document.createElement('p');
matchOutput.style.whiteSpace = 'pre'
let playerScore = 0;
let computerScore = 0;

function playerThrow(e) {
  e = this.id;
  // e.stopPropagation();
  scoreKeeper = playRPS(e);
    if (scoreKeeper === 0) {
      matchOutput.textContent = `Player : ${playerScore}\nCPU : ${computerScore}`;
      matchOutput.style.margin = '25px';
      matchOutputCon.appendChild(matchOutput);
      checkVictory(playerScore, computerScore);
    } else if (scoreKeeper === 1) {
      playerScore++;
      matchOutput.textContent = `Player : ${playerScore}\nCPU : ${computerScore}`;
      matchOutput.style.margin = '25px';
      matchOutputCon.appendChild(matchOutput);
      checkVictory(playerScore, computerScore);
    } else {
      computerScore++;
      matchOutput.textContent = `Player : ${playerScore}\nCPU : ${computerScore}`;
      matchOutput.style.margin = '25px';
      matchOutputCon.appendChild(matchOutput);
      checkVictory(playerScore, computerScore);
    };

};

buttons.forEach(button => button.addEventListener('click', playerThrow, {
  capture: false
}));


const outputCon = document.querySelector('#output-container');
const output = document.createElement('p');



function checkVictory(plyr, cpu) {
  if (plyr === 5 || cpu === 5) {
    buttons.forEach(button => button.removeEventListener('click', playerThrow));
  }
  return;
}


// Test match
// matchOfGames();

function matchOfGames(playerThrow) {
  // Define scores
  let playerScore = 0;
  let computerScore = 0;
  let scoreKeeper;
  
  // play 5 games
  for (i = 0; i < 5; i++) {
    // Run a game and adjust score acordingly
    scoreKeeper = playRPS(playerThrow);
    console.log(`Keeper` + ` ` + `${scoreKeeper}`);
    if (scoreKeeper === 1) {
      playerScore = playerScore + 1;
    } else if (scoreKeeper === -1) {
      computerScore = computerScore + 1;
    } else {
    }
  }

  if (playerScore === computerScore) {
    console.log(
      `Match Tie` +
      `\n` +
      `\nScore: \n  Player: ${playerScore} \n  CPU: ${computerScore}`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `Match Loss` +
      `\n` +
      `\nScore: \n  Player: ${playerScore} \n  CPU: ${computerScore}`
    );
  } else {
    console.log(
      `Match Victory` +
      `\n` +
      `\nScore: \n  Player: ${playerScore} \n  CPU: ${computerScore}`
    );
  }
};

// Compare user to opponent
function playRPS(playerThrow) {
  // Select @ random opponent choice
  getComputerChoice();
  // Convert for comparison
  computerThrow = computerThrow.toLowerCase();

  // Recase the inputs for stylish output
  let playerDisplay =
    playerThrow.slice(0, 1).toUpperCase() + playerThrow.slice(1);
  let computerDisplay =
    computerThrow.slice(0, 1).toUpperCase() + computerThrow.slice(1);


  if (playerThrow === computerThrow) {
    // If tie display evenly matched
    let gameMessage = `Evenly Matched\n` + `Tied Throw : ${playerDisplay}`;
    output.textContent = gameMessage;
    output.style.margin = '25px';
    output.style.whiteSpace = 'pre';
    outputCon.appendChild(output);   // If even return 0
    return 0;
  } else if (
    (playerThrow == "rock" && computerThrow == "paper") ||
    (playerThrow == "paper" && computerThrow == "scissors") ||
    (playerThrow == "scissors" && computerThrow == "rock")
  ) {
    // If lost display defeat message
    let gameMessage =
      `Get Rekt\n` +
      `Player : ${playerDisplay}\n` +
      `CPU : ${computerDisplay}`;
    output.textContent = gameMessage;
    output.style.margin = '25px';
    output.style.whiteSpace = 'pre';
    outputCon.appendChild(output);
    // If lost return -1
    return -1;
    // If won display victory message
  } else {
    let gameMessage =
      `Victory\n` +
      `Player : ${playerDisplay}\n` +
      `CPU : ${computerDisplay}`;
    output.textContent = gameMessage;
    output.style.margin = '25px';
    output.style.whiteSpace = 'pre';
    outputCon.appendChild(output);
    return 1;
  }

  // Reveal outcome to user

};

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
};
