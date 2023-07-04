let winner = '';
let playerCount = 0;
let computerCount = 0;

//function getComputerChoice will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’ for the computer choice.
function getComputerChoice () {
    var selection = ["Rock", "Paper", "Scissors"];
    return selection[Math.floor(Math.random() * selection.length)];     
}

//function getPlayerChoice will prompt input for RPS value. convert to lower case. convert 1st character to upper case. and return player value.
function getPlayerChoice() {
    playerSelection = prompt('Play by entering: "Rock", "Paper", or "Scissors"');
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    return playerSelection;
}

//function playRound will play a single round of Rock Paper Scissors. playerSelection assigned via getPlayerChoice func, computerSelection assigned via getComputerChoice func. counts incremented.
function playRound () {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        winner = `It's a draw, both drew ${playerSelection}!`
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        winner = `Player wins with ${playerSelection} vs Computer's ${computerSelection}!`;
        playerCount++;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        winner = `Computer wins with ${computerSelection} vs Player's ${playerSelection}!`;
        computerCount++;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        winner = `Player wins with ${playerSelection} vs Computer's ${computerSelection}!`;
        playerCount++;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        winner = `Computer wins with ${computerSelection} vs Player's ${playerSelection}!`;
        computerCount++;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        winner = `Player wins with ${playerSelection} vs Computer's ${computerSelection}!`;
        playerCount++;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        winner = `Computer wins with ${computerSelection} vs Player's ${playerSelection}!`;
        computerCount++;
    } else {
        winner = 'There must have been a typo here!';
    }
    return winner;
}

//playGame will loop through 5 rounds of playRound func. winner of round returned and printed. playerCount / computerCount logged. end of for loop end of game comparison.
function playGame(){
    for (let i = 1; i<6; i++) {
        console.log('Round number ' + (i));
        console.log(playRound());
        console.log(`Player total wins: ${playerCount}`);
        console.log(`Computer total wins: ${computerCount}`);
    }
    console.log('------------------');
    console.log('END OF GAME');
    if (playerCount > computerCount) {
        console.log(`Player won with total wins: ${playerCount} vs Computer's total wins: ${computerCount}`);
    }
    if (playerCount < computerCount) {
        console.log(`Computer won with total wins: ${computerCount} vs Player's total wins: ${playerCount}`);
    }
    if (playerCount === computerCount) {
        console.log(`Draw! Computer total wins: ${computerCount} vs Player's total wins: ${playerCount}`);
    }
}

playGame();