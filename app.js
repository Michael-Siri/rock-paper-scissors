

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
            playClickSound()

            setTimeout(toggleButtons, 0);
            toggleBattleText();
            battleText("It was a tie...!");
            setTimeout(toggleButtons, 2000);
            setTimeout(toggleBattleText, 1700);
            // console.log('it\'s a tie');
        }
        else{
            if(result === true){
                playClickSound()

                playerScore++;
                updateEnemyHealth(bar,96-(19.2*playerScore));

        
                setTimeout(toggleButtons, 0);
                toggleBattleText();
                battleText("Opponent was hit!");
                setTimeout(toggleButtons, 2000);
                setTimeout(toggleBattleText, 1700);

            }
            else{
                playClickSound()

                computerScore++;
                updateEnemyHealth(bar2,96-(19.2*computerScore));

                setTimeout(toggleButtons, 0);
                toggleBattleText();
                battleText("You were hit!");
                setTimeout(toggleButtons, 2000);
                setTimeout(toggleBattleText, 1700);
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


function battleText(text){
    $( "#intro" ).empty();
    $(function () {
        showText("#intro", text, 0, 50);   
      });
}

function toggleBattleText()
{
    $("#intro").toggle();
}

function playClickSound(){
    var audio = document.getElementById("clickSound");
    audio.loop =false;
    audio.play();
};


function updateEnemyHealth(healthBar,value){
healthBar.querySelector(".fill").style.width = `${value}%`;
}

function toggleButtons(button1, button2, button3)
{
    $(".button1, .button2, .button3, .button4").toggle();
}

const bar = document.querySelector(".progressBar");
const bar2 = document.querySelector(".progressBar2");

// Intro Animations

updateEnemyHealth(bar,96);
updateEnemyHealth(bar2,96);

setTimeout(battleIntro, 3000);

setTimeout(toggleBattleText, 6750);

setTimeout(toggleButtons, 7000);

// End animations

