import { game } from "./main.js";
import { NOBODY } from "./game.js";

const xImgSrc = './images/x-img.svg';
const oImgSrc = './images/o-img.svg';

export class HtmlGameView {
    constructor() {
        this.game = game;
        this.buttons = [...document.getElementsByClassName('button')];
        this.resetButton = document.getElementById('reset');
        this.nextPlayer = document.getElementById('next-player');
        this.nextPlayer.textContent = `Next player is : ${game.currentPlayer}`;

        this.resetButton.addEventListener("click", () => {
            this.game.reset();
        });

        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].addEventListener('click', () => {
                this.game.move(i);
            })
        }
    };

    onGameUpdated(game) {
        this.nextPlayer.textContent = `Next player is : ${game.currentPlayer}`;
        this.game.board.forEach((item, i) => {
            let button = this.buttons[i];
            // For every board item that is not empty
            if (item !== NOBODY) {
                button.classList.add('clicked');
                // If there is not an image inside the div, add an image based on the current player
                if (button.childElementCount < 1) {
                    let img = new Image();
                    img.classList.add('player-icon');
                    button.append(img);
                    img.src = item === 'X' ? xImgSrc : oImgSrc;
                }
                // For every board item that is empty
            } else {
                button.classList.remove('clicked', 'winner');
                //If the button div has an image inside, remove that image.
                button.childElementCount > 0 ? button.firstChild.remove() : null;
            };
            if (game.winningLine.length < 1) {
                button.classList.remove('winner');
            }
            if (game.winningLine.indexOf(i) >= 0) {
                button.classList.add('winner');
            }
        });
        const winner = game.getWinner();
        if (winner) {
            alert(winner);
            this.nextPlayer.textContent = `Winner is ${game.currentPlayer === 'X'? 'O': 'X'}`
        };
    }

}