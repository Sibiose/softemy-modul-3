import { game } from "./main.js";

export class ConsoleGameView {
    onGameUpdated(game) {
        console.log('New event from game #' + game.sessionId)
        console.log(game.board)
    }
}