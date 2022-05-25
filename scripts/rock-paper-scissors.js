var player1, player2;

const computerSelection = computerPlay();
function computerPlay(){
    // pick a random number between 0 and 2
    let choice = Math.floor(Math.random() * 3);
    let text;
    switch(choice){
        case 0:
            text = 'Rock';
            break;
        case 1:
            text = 'Paper';
            break;
        case 2:
            text = 'Scissors';
            break;
    }
    return text;
}

// Write a function that converts both choices to numbers and defines a winner
function playRound(playerSelection, computerSelection){
    let p = playerSelection.toLowerCase();
    let c = computerSelection.toLowerCase();
    let playerWins;

    switch(p){
        case 'rock':
            switch(c){
                case 'rock':
                    playerWins = "It's a tie!"
                    break;
                case 'paper':
                    playerWins = "Computer Wins!"
                    break;
                case 'scissors':
                    playerWins = "Player Wins!"
                    break;
            }
    }
    return playerWins;
}
const playerSelection = 'Rock';



console.log(playRound(playerSelection, computerSelection));