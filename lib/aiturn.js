import {
    aiHand,
    images
} from './lib.js';

export const aiTurn = () => {
    const number = Math.floor(Math.random() * 3);
    aiHand.src = images[number];
    if (number === 0) return 'rock';
    if (number === 1) return 'paper';
    if (number === 2) return 'scissors';
}