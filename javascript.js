let computerSelection = '';
let playerSelection = '';
let winner = '';
let count = 0;


//function getComputerChoice will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’ for the computer choice.
function getComputerChoice () {
    var selection = ["Rock", "Paper", "Scissors"];
    return selection[Math.floor(Math.random() * selection.length)];     
}

//function getPlayerChoice will prompt input for RPS value. convert to lower case. convert 1st character to upper case. and return value.
function getPlayerChoice() {
    playerSelection = prompt('Play by entering: "Rock", "Paper", or "Scissors"');
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    return playerSelection;
}

//function playRound will play a single round of Rock Paper Scissors. playerSelection assigned via getPlayerChoice func, computerSelection assigned via getComputerChoice func.
function playRound (playerSelection, computerSelection, winner, count) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        winner = `It's a draw, both drew ${playerSelection}!`
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        winner = `Player wins with ${playerSelection} vs Computer's ${computerSelection}!`;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        winner = `Computer wins with ${computerSelection} vs Player's ${playerSelection}!`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        winner = `Player wins with ${playerSelection} vs Computer's ${computerSelection}!`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        winner = `Computer wins with ${computerSelection} vs Player's ${playerSelection}!`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        winner = `Player wins with ${playerSelection} vs Computer's ${computerSelection}!`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        winner = `Computer wins with ${computerSelection} vs Player's ${playerSelection}!`;
    } else {
        winner = 'Typo!';
    }
    return count++, winner;
}

//playGame will loop through 5 rounds of playRound func.
function playGame(){
    for (let i = 0; i<5; i++) {
        console.log(i);
        console.log(playRound(playerSelection, computerSelection, winner, count));
    }
}

playGame();