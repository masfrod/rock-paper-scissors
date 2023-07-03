//function getComputerChoice will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice () {
    var selection = ["Rock", "Paper", "Scissors"];
    return selection[Math.floor(Math.random() * selection.length)];     
}

//computerSelection assigned a RPS value from getComputerChoice.
let computerSelection = getComputerChoice();
console.log(computerSelection);

//playerSelection prompt for RPS value. convert to lower case. convert 1st character to upper case. to fit uniformity in playRound function.
let playerSelection = prompt('Play by entering: "Rock", "Paper", or "Scissors"');
playerSelection = playerSelection.toLowerCase();
playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
console.log(playerSelection);

//function playRound will play a single round of Rock Paper Scissors, taking parameters of playerSelection and computerSelection
function playRound (playerSelection, computerSelection) {
    let winner;
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
    } 
    return winner;
}

console.log(playRound(playerSelection, computerSelection));