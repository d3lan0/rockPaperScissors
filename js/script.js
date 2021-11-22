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
    let win = [`win`,`You win, ${playerSelection} beats ${computerSelection}`];
    let lose = ['lose',`You lose, ${computerSelection} beats ${playerSelection}`];
    let draw = ['draw', `It's a draw, you both played ${computerSelection}`];

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

function checkWinner (computerScore, playerScore){
    if (computerScore > playerScore){
        return `Computer wins!`;
    }else if(playerScore >computerScore){
        return `Player wins!`;
    } else return `Its a Draw!`;
}

function game (){
    let computerScore = 0;
    let playerScore = 0;

     for (let i = 1; i <= 5; i++){
        let validPlay = false;
        let playerSelection;
        const computerSelection = computerPlay();

        do {
            
            playerSelection = prompt(`Round ${i} Please select rock, paper or scissors...`).toLowerCase().toString();
            if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors" || playerSelection === null){
                validPlay = true;
            }
        }

        while(!validPlay);

        let round = (playRound(playerSelection,computerSelection));
        
        if (round[0] === 'win'){
            console.log(round[1]);
            playerScore++;
        } else if(round[0] === 'lose'){
            console.log(round[1]);
            computerScore++
        } else {
            console.log(round[1]);
        }
    }
    console.log(computerScore);
    console.log(playerScore);
    console.log(checkWinner(computerScore, playerScore));
}

game();