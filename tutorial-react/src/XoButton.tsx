import { XoState } from "./Xostate"

export const XoButton = (props: {
    state: XoState,
    setState: (state: XoState) => void,
    index: number

}) => {

    const handleClick = () => {
        const state = props.state;
        state.board[props.index] = props.state.currentPlayer;
        state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
        props.setState({ ...state });
    }

    const background = props.state.board[props.index] !== '' ? 'yellow' : ''
    return (
        <div 
        onClick={handleClick}
        style={{
            background,
            width: '40px',
            height: '40px',
            fontSize: '30px',
            lineHeight: '40px',
            textAlign: 'center',
            borderStyle: 'solid',
            borderColor: 'black'
        }}>
            {props.state.board[props.index]}
        </div>
    )
}