function computerPlay(){
    let play = Math.floor(Math.random()*3)+1;

    if (play == 1){
        play = 'rock';
    }else if (play == 2){
        play = 'paper';
    }else play = 'scissors';

    return play;
}

function playRound(playerSelection, computerSelection){
    let win = `You win, ${playerSelection} beats ${computerSelection}`;
    let lose = `You lose, ${computerSelection} beats ${playerSelection}`;
    let draw = `It's a draw, you both played ${computerSelection}`;

    if (computerSelection === 'rock' && playerSelection === 'scissors'){
        return lose;
    } else if (computerSelection === 'paper' && playerSelection === 'rock'){
        return lose;
    } else if (computerSelection === 'scissors' && playerSelection === 'paper'){
        return lose;
    }else if (computerSelection === playerSelection){
        return draw;
    }else return win;
}

