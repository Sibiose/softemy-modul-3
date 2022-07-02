export class GameQueue {
    constructor() {
        this.queue = [];
    }

    addToQueue(data) {
        this.queue.push(data);
    }

    dequeue() {
        this.queue.pop().boardState;
        if(this.queue.length < 1){
            return new Array(9).fill('');
        }
        return this.queue[this.queue.length-1];
    }
    restoreToSession(nrOfItems) {
        if (nrOfItems) {
            for (let i = 0; i < nrOfItems; i++) {
                this.dequeue();
            }
        }
    }
    resetQueue() {
        this.queue = [];
    }
};

export class GameMove {
    constructor(id, index, boardState, currentPlayer) {
        this.id = id;
        this.index = index;
        this.boardState = boardState;
        this.player = currentPlayer;

    };
};