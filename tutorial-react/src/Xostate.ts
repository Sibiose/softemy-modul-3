export interface XoState {
    currentPlayer: string;
    board: string[];

}

export const defaultXoState: XoState = {
    currentPlayer: 'X',
    board: new Array(9).fill('')
}

export const computeWinner = (board:string[]) =>{
//to do implementat logica ;
}

export const move = (state: XoState, index: number) => {
    const result = { ...state };
    result.board[index] = state.currentPlayer;
    result.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
    result.winner = computeWinner(state.board);
    return result;
}