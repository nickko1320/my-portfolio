let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    losses: 0,
    tie: 0
};

updateScoreElement();


function playGame(playerMove) {
    const computerMove = pickComputerMove();


    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        }
        else if (computerMove === 'paper'){
            result = 'You lose';
        }
        else if (computerMove === 'scissors') {
            result = 'You win';
        }
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win';
        }
        else if (computerMove === 'paper'){
            result = 'Tie';
        }
        else if (computerMove === 'scissors') {
            result = 'You lose';
        }
    }

    else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose';
        }
        else if (computerMove === 'paper'){
            result = 'You win';
        }
        else if (computerMove === 'scissors') {
            result = 'Tie';
        }
    }
    
    if (result === 'You win') {
        score.win += 1;
    }
    else if (result === 'You lose') {
        score.losses += 1;
    }
    else if (result === 'Tie') {
        score.tie += 1;

    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You
<img src="images/rps_game/${playerMove}-emoji.png" class="move-icon">
<img src="images/rps_game/${computerMove}-emoji.png" class="move-icon">
Computer`;
    
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Win: ${score.win}, Losses: ${score.losses} Ties: ${score.tie}`;
}

function pickComputerMove() {
    const randomNumber = Math.random();
    
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2 /3) {
        computerMove = 'paper';
    }
    else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}