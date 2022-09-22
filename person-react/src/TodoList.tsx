import { useRef, useState } from "react";
export const ToDoList = () => {
    
    const [listState,setListState] = useState<string[]>([]) 
    const [errorState, setErrorState] = useState('');
    const toDoInput = useRef<HTMLInputElement>(null)
    const addToList = () => {
        const text = toDoInput.current?.value ?? "";
        if(text === ""){
            setErrorState('Invalid value')
        }
        else {
            setErrorState('');
            setListState([...listState, text]);
        }
    }
    return (
        <>
        <h1>Todo List</h1>
        {listState.length > 0? <ul>{listState.map((el,i) => <li style={{
            listStyle: 'none'
        }}key={i}><input  type="checkbox" />{el}</li>)}</ul> : <p>No todo yet.Please add items. </p>}
        <input onKeyDown={(e)=>{
            if(e.key === 'Enter'){
                addToList();
            }
        }} ref = {toDoInput} type="text" />
        <p
        style={{
            display: errorState === ""?
            'none':'block'
        }} >{errorState}</p>
        <button style={{display:'block'}} onClick={addToList}>Add</button>
        </>
    )
}

