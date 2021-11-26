"use strict";

const button = document.querySelectorAll('.gameButtons button');
const pScore = document.querySelector('.playerScore');
const cScore = document.querySelector('.computerScore');
const gameArea = document.querySelector('.gameButtons');
const remove = document.querySelector('.gameArea p');
const reset = document.querySelector('footer button');

let round = 1;
let computerScore= 0;
let playerScore = 0;

button.forEach(element => {
    element.addEventListener('click', function(e){
        let computer = computerPlay();
        let player = element.id;
        let thisRound = playRound(computer, player); 

        //checks round to end game
        if (round > 4){
            let winner = checkWinner(computerScore,playerScore)
            gameArea.textContent= winner;
            remove.style.display  = "none";
            }
        //plays round
        if (thisRound === 'win'){
             playerScore ++;
             round++;
             pScore.textContent = playerScore;
         } else if (thisRound === 'lose'){
            computerScore++;
            round++;
            cScore.textContent = computerScore;
         } else round++;
         console.log(`${computerScore} ${playerScore} ${round}`)
    })
});

reset.addEventListener('click', function(){
    location.reload();
});

//console.log(cScore);



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

    if (computerSelection === 'rock' && playerSelection === 'scissors'){
        return 'lose';
    } else if (computerSelection === 'paper' && playerSelection === 'rock'){
        return 'lose';
    } else if (computerSelection === 'scissors' && playerSelection === 'paper'){
        return 'lose';
    }else if (computerSelection === playerSelection){
        return 'draw';
    }else return 'win';
}

function checkWinner (computerScore, playerScore){
    if (computerScore > playerScore){
        return `You lose!`;
    }else if(playerScore > computerScore){
        return `You win!`;
    } else if ( computerScore === playerScore) return `Its a Draw!`;
}