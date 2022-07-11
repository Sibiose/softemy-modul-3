
export const NOBODY = '';
export interface XoState {
    currentPlayer: string;
    board: string[];
    winner: string;
    isActive: boolean;
}

export const WINNING_LINES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]
export const defaultXoState: XoState = {
    currentPlayer: 'X',
    board: new Array(9).fill(''),
    winner: NOBODY,
    isActive: true
}

export const computeWinner = (board: string[]): string => {
    let winner: string = '';
    WINNING_LINES.forEach(line => {
        if (board[line[0]] !== NOBODY &&
            board[line[0]] === board[line[1]] &&
            board[line[1]] === board[line[2]]) {
            winner = board[line[0]];
        };
    });
    return winner;
}

export const move = (state: XoState, index: number) => {
    if (state.board[index] === NOBODY && state.winner === NOBODY) {
        const result = { ...state };
        result.board[index] = state.currentPlayer;
        result.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
        result.winner = computeWinner(state.board);
        if (result.winner !== NOBODY) {
            result.isActive = false;
            alert(`Congratulations ${result.winner}`);
        };
        return result;
    }
    else return { ...state };
}