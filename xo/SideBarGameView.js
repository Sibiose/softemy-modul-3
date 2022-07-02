import { game } from "./main.js";

export class SideBarGameView {

    constructor() {
        this.list = document.getElementById('move-list');
        this.queue = game.gameQueue.queue;
        this.undoBtn = document.getElementById('undo-btn');

        this.undoBtn.addEventListener('click', ()=>{
            if(this.queue.length > 1){               
                game.undo(game.gameQueue.dequeue());
            } else{
                game.reset();
            }
            
        });

    }
    onGameUpdated(game) {
        this.resetList();
        this.queue = game.gameQueue.queue;
        for (let i = this.queue.length - 1; i >= 0; i--) {
            let move = this.queue[i];
            let li = document.createElement('li');
            li.classList.add('move-list-item');
            li.append(document.createTextNode(`#${move.id}. Player ${move.player}, moved to square ${move.index + 1}.`));
            this.list.append(li);

            li.addEventListener('click', () => {
                game.gameQueue.restoreToSession(this.queue.length - move.id);
                game.undo(move);
            })
        };
        if(this.queue.length > 0){
            this.undoBtn.classList.add('active-undo');
        } else {
            this.undoBtn.classList.remove('active-undo');
        }
    };

    resetList() {
        [...this.list.children].forEach(el => el.remove());
    }
}