

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

//Assigning functions to buttons

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
                if(playerScore<5){
                    setTimeout(toggleButtons, 2000);
                    setTimeout(toggleBattleText, 1700);
                }
            }
            else{
                playClickSound()

                computerScore++;
                updateEnemyHealth(bar2,96-(19.2*computerScore));

                setTimeout(toggleButtons, 0);
                toggleBattleText();
                battleText("You were hit!");
                if(computerScore <5){
                    setTimeout(toggleButtons, 2000);
                    setTimeout(toggleBattleText, 1700);
                }
            }
        }

        if(playerScore>=5){
            console.log(`You win ${playerScore} to ${computerScore}`);
            
            var theme = document.getElementById("battleTheme");
            theme.pause();

            setTimeout(playVictoryTheme,2750);
            setTimeout(endGameWin,3000);
            setTimeout(endGameWin2,6000);
            setTimeout(endGameWin3,9000);

            
        }
        else if (computerScore>=5){
            console.log(`You lose ${playerScore} to ${computerScore}`);
            setTimeout(endGameLoss,3000);
            setTimeout(endGameLoss2,6000);

        }

       });
})

const btn2 = document.getElementById("opponent");
const btn3 = document.getElementById("you");

btn2.addEventListener('click', () => {

    setTimeout(toggleButtons, 0);
    toggleBattleText();
    
    if(brockCounter < 3){
        switch(brockCounter){
            case 0: 
                playClickSound()
                battleText("BROCK: Don't touch me!");
                brockCounter++;
                break;
            case 1:
                playClickSound()
                battleText("BROCK: I said stop touching me!");
                brockCounter++;
                break;
            case 2:
                playClickSound()
                battleText("BROCK: I warned you! Get away!");
                brockCounter++;
                if(computerScore < 4){
                    computerScore++;
                    updateEnemyHealth(bar2,96-(19.2*computerScore));
                }

                break;
        }

    }
    else{
        battleText("Brock: ...");
    }


    setTimeout(toggleButtons, 2400);
    setTimeout(toggleBattleText, 2200);


});

btn3.addEventListener('click', () => {

    playClickSound();
    setTimeout(toggleButtons, 0);
    toggleBattleText();

    battleText("Denver, a bright and kind engineer graduate.");

    setTimeout(toggleButtons, 2800);
    setTimeout(toggleBattleText, 2600);
});

// btn2.addEventListener('click', () => {
//     alert("hi");
// });

// btn3.addEventListener('click', () => {

// });



//Type message screen function

var showText = function (target, message, index, interval) {   
    if (index < message.length) {
      $(target).append(message[index++]);
      setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
  }

//Initial battleIntro

function battleIntro(){
    $(function () {
        showText("#intro", "A suspicious lurker has challenged you . . . ! ", 0, 50);   
      });
}


function battleText(text){
    $( "#intro" ).empty();
    $(function () {
        showText("#intro", text, 0, 45);   
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

function playVictoryTheme(){
    var audio = document.getElementById("victoryTheme");
    audio.play();
}


function updateEnemyHealth(healthBar,value){
healthBar.querySelector(".fill").style.width = `${value}%`;
}

function toggleButtons(button1, button2, button3)
{
    $(".button1, .button2, .button3, .button4, .invisible1, .invisible2").toggle();
}

//Endgame Text

function endGameWin(){
    battleText("BROCK: You won... I had a feeling about you...");
}

function endGameWin2(){
    battleText("Congratulations! I knew you could do it!");
} 

function endGameWin3(){
    battleText("Get well soon Denver,  Don't give up. -Mike");
}

function endGameLoss(){
    battleText("BROCK: There is always another chance...");
}
function endGameLoss2(){
    battleText("BROCK: You can win but only if you don't give up.");
}

const bar = document.querySelector(".progressBar");
const bar2 = document.querySelector(".progressBar2");


// Intro Animations

updateEnemyHealth(bar,96);
updateEnemyHealth(bar2,96);

setTimeout(battleIntro, 3000);

setTimeout(toggleBattleText, 6750);

setTimeout(toggleButtons, 7000);

let brockCounter = 0;

// End animations

