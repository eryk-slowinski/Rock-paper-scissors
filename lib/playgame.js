import {
    aiTurn
} from './aiturn.js';
import {
    checkWin
} from './checkwin.js';
import {
    renderScore
} from './renderscore.js';
import {
    shaking
} from './shaking.js';
import {
    playerHand
} from './lib.js';

export const playGame = event => {
    const aiPick = aiTurn();
    const playerPick = event.target.id;
    playerHand.src = `img/${event.target.id}.png`;
    checkWin(aiPick, playerPick);
    renderScore();
    shaking();
}