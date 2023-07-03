//function getComputerChoice will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice () {
    var selection = ["Rock", "Paper", "Scissors"];
    return selection[Math.floor(Math.random() * selection.length)];     
}

console.log(getComputerChoice());

