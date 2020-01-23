const playerHand = document.querySelector('.player');
const aiHand = document.querySelector('.ai');
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const gameScore = {
    games: 0,
    gamesWon: 0,
    gamesLost: 0,
    draws: 0,
}

const images = ['img/rock.png', 'img/paper.png', 'img/scissors.png'];

const aiTurn = () => {
    const number = Math.floor(Math.random() * 3);
    aiHand.src = images[number];
    if (number === 0) return 'rock';
    if (number === 1) return 'paper';
    if (number === 2) return 'scissors';
}

const playGame = event => {
    const aiPick = aiTurn();
    const playerPick = event.target.id;
    playerHand.src = `img/${event.target.id}.png`;
    checkWin(aiPick, playerPick);
}

const checkWin = (ai, player) => {
    if (ai === 'rock') {
        if (player === 'rock') console.log('draw');
        if (player === 'paper') console.log('player wins');
        if (player === 'scissors') console.log('ai wins');
    } else if (ai === 'paper') {
        if (player === 'paper') console.log('draw');
        if (player === 'scissors') console.log('player wins');
        if (player === 'rock') console.log('ai wins');
    } else if (ai === 'scissors') {
        if (player === 'scissors') console.log('draw');
        if (player === 'rock') console.log('player wins');
        if (player === 'paper') console.log('ai wins');
    }
}


rockButton.addEventListener('click', playGame);
paperButton.addEventListener('click', playGame);
scissorsButton.addEventListener('click', playGame);