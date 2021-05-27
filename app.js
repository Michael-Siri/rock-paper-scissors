function computerPlay () {
    let number = Math.floor(Math.random()*3);
    
    if(number === 0){
        return 'ROCK';
    }
    else if (number === 1){
        return 'PAPER';
    }
    else{
        return 'SCISSORS';
    }

}

function playRound(computer, player){
    console.log(`computer plays ${computer}, player plays ${player}` );S
    player = player.toUpperCase();

    if(player === computer){
        return 'tie';
    }
    else if (player === 'ROCK'){
        return (computer === 'SCISSORS' ? 'win' : 'loss');
    }
    else if (player === 'PAPER'){
        return (computer === 'ROCK' ? 'win' : 'lose');
    }
    else{
        return (computer === 'PAPER' ? 'win' : 'lose');
    }

}
