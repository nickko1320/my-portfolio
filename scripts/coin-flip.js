let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    losses: 0,
    ties: 0
};

const winCountElement = document.getElementById('winCount');
const lossCountElement = document.getElementById('lossCount');
const tieCountElement = document.getElementById('tieCount');
const playerMoveElement = document.getElementById('playerMove');
const playerImageElement = document.getElementById('playerImage');
const computerMoveElement = document.getElementById('computerMove');
const computerImageElement = document.getElementById('computerImage');
const coinFlipResultElement = document.getElementById('coinFlipResult');
const coinImageElement = document.getElementById('coinImage');
const outcomeElement = document.getElementById('outcome');

function updateScore() {
    winCountElement.innerText = score.win;
    lossCountElement.innerText = score.losses;
    tieCountElement.innerText = score.ties;
}

function playGame(playerChoice) {
    const randomNumber = Math.random();
    const playerWins = Math.random() < 0.5;
    const computerWins = Math.random() < 0.5;

    const computerChoice = computerWins ? 'heads' : 'tails';
    const coinFlipResult = playerWins ? playerChoice : computerChoice;

    playerMoveElement.innerText = playerChoice;
    playerImageElement.src = playerChoice === 'heads' ? 'images/coin-flip-game/heads.png' : 'images/coin-flip-game/tails.png';

    computerMoveElement.innerText = computerChoice;
    computerImageElement.src = computerChoice === 'heads' ? 'images/coin-flip-game/heads.png' : 'images/coin-flip-game/tails.png';

    coinFlipResultElement.innerText = coinFlipResult;
    coinImageElement.src = coinFlipResult === 'heads' ? 'images/coin-flip-game/heads.png' : 'images/coin-flip-game/tails.png';

    const winMessage = 'You Win!';
    const loseMessage = 'You Lose!';
    const tieMessage = "It's a tie!";

    // Hide the images on game start
    playerImageElement.style.display = 'block';
    computerImageElement.style.display = 'block';
    coinImageElement.style.display = 'block';

    if (playerChoice === computerChoice && playerChoice === coinFlipResult) {
    score.ties += 1;
    outcomeElement.innerText = tieMessage;
    } else if (playerChoice === coinFlipResult) {
    score.win += 1;
    outcomeElement.innerText = winMessage;
    } else if (computerChoice === coinFlipResult) {
    score.losses += 1;
    outcomeElement.innerText = loseMessage;
    }

    localStorage.setItem('score', JSON.stringify(score));
    updateScore();
}

function resetScore() {
    score = {
    win: 0,
    losses: 0,
    ties: 0
    };
    localStorage.setItem('score', JSON.stringify(score));
    updateScore();

    // Hide the images on score reset
    playerImageElement.style.display = 'none';
    computerImageElement.style.display = 'none';
    coinImageElement.style.display = 'none';
}

// Initial score display
updateScore();