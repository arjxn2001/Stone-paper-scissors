let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

/*if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
}*/

updateScoreElement()


function playGame (playerMove) {
    const computerMove =  pickComputerMove();


    let result = '';

    if(playerMove === '✌️'){
        if(computerMove === '✊') {
            result = 'You lose.' ;
        } else if (computerMove === '🖐️') {
            result = 'You win.'; 
        } else if (computerMove === '✌️') {
            result = 'Tie.'
        }
    } else if(playerMove === '🖐️') {
        if(computerMove === '✊') {
            result = 'You win.' ;
         } else if (computerMove === '🖐️') {
            result = 'Tie.'; 
         } else if (computerMove === '✌️') {
             result = 'You lose.'
         }
    } else if(playerMove === '✊') {
        if(computerMove === '✊') {
            result = 'Tie.' ;
         } else if (computerMove === '🖐️') {
            result = 'You lose.'; 
         } else if (computerMove === '✌️') {
             result = 'You win.'
         }
    }

    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses +=1;
    } else if (result === 'Tie.') {
        score.ties +=1
    }


    localStorage.setItem('score' , JSON.stringify(score));    
    
    
    updateScoreElement()

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = ` You <span class="move-icon">${playerMove}</span>
Computer <span class="move-icon">${computerMove}</span>`;


    
}



function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
    const randomNumber =  Math.random();

    let computerMove = '';

        if(randomNumber >= 0 && randomNumber < 1/3) {
            computerMove = '✊';
        } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
            computerMove = '🖐️';
        } else if (randomNumber >= 2/3 && randomNumber < 1) {
            computerMove = '✌️';
        }

        return computerMove;
}
