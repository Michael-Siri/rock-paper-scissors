

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
    console.log(`computer plays ${computer}, player plays ${player}` );
    player = player.toUpperCase();

    if(player === computer){
        return 'tie';
    }
    else if (player === 'ROCK'){
        return (computer === 'SCISSORS' ? true : false);
    }
    else if (player === 'PAPER'){
        return (computer === 'ROCK' ? true : false);
    }
    else{
        return (computer === 'PAPER' ? true : false);
    }

}

function resetScore(){
    playerScore = 0;
    computerScore = 0;
}

const btn = document.querySelectorAll('#btn');
btn.forEach((btn) =>{
    btn.addEventListener('click', () => {
        
        let result = playRound(computerPlay(), btn.value);
        if(result == 'tie'){
            console.log('it\'s a tie');
        }
        else{
            // (result)?playerScore++:computerScore++;
            if(result === true){
                playerScore++;
                updateEnemyHealth(bar,96-(19.2*playerScore));
            }
            else{
                computerScore++;
                updateEnemyHealth(bar2,96-(19.2*computerScore));
            }
        }

        if(playerScore>=5){
            console.log(`You win ${playerScore} to ${computerScore}`);
            resetScore();
        }
        else if (computerScore>=5){
            console.log(`You lose ${playerScore} to ${computerScore}`);
            resetScore();
        }

       });
})

var showText = function (target, message, index, interval) {   
    if (index < message.length) {
      $(target).append(message[index++]);
      setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
  }

function battleIntro(){
    $(function () {
        showText("#intro", "Bandit has challenged you to a battle . . . ! ", 0, 50);   
      });
}

function updateEnemyHealth(healthBar,value){
healthBar.querySelector(".fill").style.width = `${value}%`;
}

function showButtons(button1, button2, button3)
{
    $(".button1, .button2, .button3, .button4").toggle();
}

const bar = document.querySelector(".progressBar");
const bar2 = document.querySelector(".progressBar2");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");

updateEnemyHealth(bar,96);
updateEnemyHealth(bar2,96);

setTimeout(battleIntro, 3000);

setTimeout(function(){
    $('#intro').hide()}, 7000);

setTimeout(showButtons, 7001);



