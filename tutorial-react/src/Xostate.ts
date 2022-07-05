export interface XoState{
    currentPlayer:string;
    board:string[];

}

export const defaultXoState:XoState = {
    currentPlayer: 'X',
    board:new Array(9).fill('')
}