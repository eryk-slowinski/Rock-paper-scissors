import {
    result
} from './lib.js';

export const checkWin = (ai, player) => {
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