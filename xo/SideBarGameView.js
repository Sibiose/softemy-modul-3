import { game } from "./main.js";

export class SideBarGameView {

    constructor() {
        this.list = document.getElementById('move-list');
        this.undoBtn = document.getElementById('undo-btn');

        this.undoBtn.addEventListener('click', () => {
            game.undo();
        });

    }
    onGameUpdated(game) {
        this.resetList();
        game.moveHistory.map((move, i)=> this.addListItem(move, i+1)).reverse()
        .forEach(item=> this.list.append(item));

        if (game.moveHistory.length > 0) {
            this.undoBtn.classList.add('active-undo');
        } else {
            this.undoBtn.classList.remove('active-undo');
        }
    };

    resetList() {
        this.list.textContent = '';
    }

    addListItem(move, index){
        let li = document.createElement('li');
            li.classList.add('move-list-item');
            li.append(document.createTextNode(`#${index}. Player ${move.player}, moved to square ${move.index + 1}.`));

            li.addEventListener('click', () => {
                game.undoTo(index);
            });

            return li;
    }
}