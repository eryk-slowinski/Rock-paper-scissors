const playerHand = document.querySelector('.player');
const aiHand = document.querySelector('.ai');
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const result = document.querySelector('.result');
const gamesTotal = document.querySelector('.games-total');
const gamesWon = document.querySelector('.games-won');
const gamesLost = document.querySelector('.games-lost');
const draws = document.querySelector('.draws');
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
    renderScore();
    shaking();
}

const checkWin = (ai, player) => {
    if (ai === 'rock') {
        if (player === 'rock') result.textContent = 'DRAW';
        if (player === 'paper') result.textContent = 'WIN!';
        if (player === 'scissors') result.textContent = 'LOST...';
    } else if (ai === 'paper') {
        if (player === 'paper') result.textContent = 'DRAW';
        if (player === 'scissors') result.textContent = 'WIN!';
        if (player === 'rock') result.textContent = 'LOST...';
    } else if (ai === 'scissors') {
        if (player === 'scissors') result.textContent = 'DRAW';
        if (player === 'rock') result.textContent = 'WIN!';
        if (player === 'paper') result.textContent = 'LOST...';
    }
}

const renderScore = () => {
    gameScore.games++;
    const whoWon = result.textContent;
    (whoWon === 'DRAW') ? gameScore.draws++: (whoWon === 'LOST...') ? gameScore.gamesLost++ : gameScore.gamesWon++;
    gamesTotal.textContent = `Games: ${gameScore.games}`;
    gamesWon.textContent = `Games won: ${gameScore.gamesWon}`;
    gamesLost.textContent = `Games lost: ${gameScore.gamesLost}`;
    draws.textContent = `Draws: ${gameScore.draws}`;
}

const shaking = () => {
    playerHand.classList.add('shaking');
    aiHand.classList.add('shaking');
    setTimeout(() => {
        playerHand.classList.remove('shaking');
        aiHand.classList.remove('shaking');
    }, 400);
}

rockButton.addEventListener('click', playGame);
paperButton.addEventListener('click', playGame);
scissorsButton.addEventListener('click', playGame);