import {
    result,
    gamesTotal,
    gamesWon,
    gamesLost,
    draws
} from './lib.js';

const gameScore = {
    games: 0,
    gamesWon: 0,
    gamesLost: 0,
    draws: 0,
}

export const renderScore = () => {
    gameScore.games++;
    const whoWon = result.textContent;
    (whoWon === 'DRAW') ? gameScore.draws++: (whoWon === 'LOST...') ? gameScore.gamesLost++ : gameScore.gamesWon++;
    gamesTotal.textContent = `Games: ${gameScore.games}`;
    gamesWon.textContent = `Games won: ${gameScore.gamesWon}`;
    gamesLost.textContent = `Games lost: ${gameScore.gamesLost}`;
    draws.textContent = `Draws: ${gameScore.draws}`;
}