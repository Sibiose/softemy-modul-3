import { move, XoState } from "./Xostate"

export const XoButton = (props: {
    state: XoState,
    setState: (state: XoState) => void,
    index: number,
}) => {


    const handleClick = () => {
        props.setState(move(props.state, props.index));
    }

    let imgSrc = 'blank-src.bmp';
    if (props.state.board[props.index] === 'X') {
        imgSrc = 'x-img.svg';
    } else if (props.state.board[props.index] === 'O') {
        imgSrc = 'o-img.svg'
    } else {
        imgSrc = 'blank-src.bmp';
    }

    const background = props.state.board[props.index] !== '' ? 'yellow' : ''
    return (
        <img src={imgSrc}
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

        </img>
    )
}