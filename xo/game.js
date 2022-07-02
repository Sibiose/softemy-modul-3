import { GameMove, GameQueue } from "./Queue.js";
import { SideBarGameView } from "./SideBarGameView.js";

export const NOBODY = '';
const WINNING_LINES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]

export class Game {
    currentPlayer;

    constructor() {
        this.isActive = true;
        this.currentMove = 1;
        this.gameQueue = new GameQueue();
        this.sessionId = new Date().getTime();
        this.views = []
        this.currentPlayer = 'X';
        this.winningLine = [];
        this.board = [
            '', '', '',
            '', '', '',
            '', '', '',
        ]
        this.gameQueue
    }

    attachView(view) {
        this.views.push(view);
        this.notifyGameUpdated();
    }


    move(index) {
        if (!this.isActive || this.board[index] !== NOBODY) {
            return;
        }
        this.board[index] = this.currentPlayer;
        this.gameQueue.addToQueue(new GameMove(this.currentMove, index, this.board.map(el=>el), this.currentPlayer));
        this.switchPlayer();
        this.currentMove++;
        this.checkWinner();
        this.notifyGameUpdated();
    }
    reset() {
        this.board = new Array(9).fill('');
        this.winningLine = [];
        this.gameQueue.resetQueue();
        this.currentPlayer = 'X';
        this.currentMove = 1;
        this.notifyGameUpdated();
        this.isActive = true;
    }

    getWinner() {
        return this.winningLine.length > 0 ? this.board[this.winningLine[0]] : null;
    }

    //Private
    notifyGameUpdated() {
        this.views.forEach(view => {
            view.onGameUpdated(this);
        })
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }

    checkWinner() {
        WINNING_LINES.forEach(line => {
            if (this.board[line[0]] !== NOBODY &&
                this.board[line[0]] === this.board[line[1]] &&
                this.board[line[1]] === this.board[line[2]]) {
                this.winningLine = line;
                this.isActive = false;
            } 
        })
    }
    undo(move) {
        this.winningLine =[];
        this.board = move.boardState.map(el=>el);
        this.isActive = true;
        this.currentPlayer = move.player;
        this.switchPlayer();
        this.notifyGameUpdated();
        this.currentMove = move.boardState.filter(el=>el!== '').length+1;
    }
}














