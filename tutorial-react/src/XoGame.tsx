import { useState } from "react"
import { XoButton } from "./XoButton"
import { defaultXoState, XoState } from "./Xostate";
import { move } from "./Xostate";

export const XoGame = () => {
    const [state, setState] = useState<XoState>(defaultXoState);

    return (
        <>
            <h1>Next Player is {state.currentPlayer}</h1>
            <table>
                <tbody>
                    <tr>
                        <td><XoButton setState={setState} state={state} index={0} /></td>
                        <td><XoButton setState={setState} state={state} index={1} /></td>
                        <td><XoButton setState={setState} state={state} index={2} /></td>
                    </tr>
                    <tr>
                        <td><XoButton setState={setState} state={state} index={3} /></td>
                        <td><XoButton setState={setState} state={state} index={4} /></td>
                        <td><XoButton setState={setState} state={state} index={5} /></td>
                    </tr>
                    <tr>
                        <td><XoButton setState={setState} state={state} index={6} /></td>
                        <td><XoButton setState={setState} state={state} index={7} /></td>
                        <td><XoButton setState={setState} state={state} index={8} /></td>
                    </tr>
                </tbody>
            </table>
            <button className="reset" onClick={() => {
                setState({ ...defaultXoState, board: new Array(9).fill("") });
            }}>Reset button</button>
            <ul>
                {state.history.map((el, i) => <li onClick={()=>{
                    setState(move(el, el.lastTouchedSquare))
                }} key={i}>#{i}. Player {el.currentPlayer} moved to square {el.lastTouchedSquare}</li>)}
            </ul>
        </>
    )

}