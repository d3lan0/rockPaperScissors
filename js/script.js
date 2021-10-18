function computerPlay(){
    let play = Math.floor(Math.random()*3)+1;
    if (play == 1){
        play = 'rock';
    }else if (play == 2){
        play = 'paper';
    }else play = 'scissors';

    return play;
}

