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

console.log(computerPlay());