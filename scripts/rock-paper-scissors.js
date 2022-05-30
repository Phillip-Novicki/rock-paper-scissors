var player1, player2;

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

// Write a function that defines a winner
function playRound(playerSelection, computerSelection){
    let p = playerSelection.toLowerCase();
    let c = computerSelection.toLowerCase();
    let playerWins;

    if (p == 'rock'){
        if (c == 'paper'){
            playerWins = "Computer Wins!"
        }
        else if (c == 'scissors'){
            playerWins = "Player Wins!"
        }
        else{
            playerWins = "It's a Tie!"
        }
    }
    else if (p == 'scissors'){
        if (c == 'paper'){
            playerWins = "Player Wins!"
        }
        else if (c == 'rock'){
            playerWins = "Computer Wins!"
        }
        else{
            playerWins = "It's a Tie!"
        }
    }
    else if (p == 'paper'){
        if (c == 'rock'){
            playerWins = "Player Wins!"
        }
        else if (c == 'scissors'){
            playerWins = "Computer Wins!"
        }
        else {
            playerWins = "It's a tie!"
        }
    }
    else{
        return "Something went wrong..."
    }
    return playerWins;
} 

// Write a function that plays a 5 round game of Rock Paper Scissors
function game(){
    let player_score = 0;
    let comp_score = 0;
   
    for (let i=0; i<5; i++){
        //Replay round
        const computerSelection = computerPlay();
        const playerSelection = computerPlay();
        let current_game = playRound(playerSelection, computerSelection);
        //Calculate results
        if (current_game == "Player Wins!"){
            player_score +=1;
            }
        else if (current_game == "Computer Wins!"){
            comp_score +=1;
            }
        else {
            continue;
        }
    }
    if (player_score > comp_score){
        winner = "Player"
    }
    else if (player_score < comp_score){
        winner = "Computer"
    }
    else{
        winner = "Nobody"
    };
    console.log(`Player has ${player_score} points Computer has ${comp_score} points\n
    ${winner} wins!`);
}

game();