import {
    playerHand,
    aiHand
} from './lib.js';

export const shaking = () => {
    playerHand.classList.add('shaking');
    aiHand.classList.add('shaking');
    setTimeout(() => {
        playerHand.classList.remove('shaking');
        aiHand.classList.remove('shaking');
    }, 400);
}