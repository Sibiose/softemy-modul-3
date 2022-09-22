import { useRef, useState } from "react";

let listStyle = {
    margin: '10px',
    paddingLeft: 0
}


export const TodoListNew = () => {
    //Managing state for application
    const [listState, setListState] = useState<ListItem[]>([]);
    const [inputState, setInputState] = useState<string>("");
    const [errorState, setErrorState] = useState<boolean>(false);

    //Making a reference for the input element
    const textInput = useRef<HTMLInputElement>(null);

    const handleClick = (text: string) => {
        if (text === "") {
            toggleErrorState(true);
            return;
        }
        toggleErrorState(false);
        list.addItem(text);
        setListState([...list.itemArr]);
        setInputState('');
    }

    const toggleErrorState = (isError: boolean) => {
        setErrorState(list.handleError(isError));
    };

    const handleInput = (e: any, text: string) => {
        if (e.key === 'Enter')
            handleClick(text);
    }

    return (
        <>
            <h1>To Do List</h1>
            {listState.length > 0 ? <ul style={listStyle}>{listState.map((item, index) => {
                return item.isEditing ? <ToDoListItemEditor toggleErrorState={toggleErrorState} id={index} key={index} item={item} listState={listState} setListState={setListState} /> : <ToDoListItemNew toggleErrorState={toggleErrorState} listState={listState} id={index} setListState={setListState} key={index} item={item} />
            })}</ul> : <p>No list items</p>}
            <input onKeyDown={(e) => { handleInput(e, textInput.current?.value ?? "") }} ref={textInput} type="text" value={inputState} onInput={(e) => { setInputState(e.currentTarget.value) }} />
            {errorState ? <p>Please enter a valid input</p> : null}
            <br />
            <button onClick={() => { handleClick(textInput.current?.value ?? "") }}>Add Item</button>
        </>
    )
}

interface Props {
    key: number;
    id: number;
    item: ListItem;
    setListState: (listState: ListItem[]) => void;
    listState: ListItem[];
    toggleErrorState: (isError: boolean) => void;
}

const ToDoListItemNew = (props: Props) => {
    const { id, item, setListState } = props
    let listItemStyle = {
        listStyle: 'none',
        margin: 'none'
    }

    const handleDelete = (id: number) => {
        list.deleteItem(id);
        props.setListState([...list.itemArr]);
    }

    const handleCheck = (id: number) => {
        list.toggleChecking(id);
        setListState([...list.itemArr]);
    }

    return (
        <li style={listItemStyle}>
            <input
                onClick={() => {
                    handleCheck(id);
                }}
                type="checkbox" />
            <span style={{
                textDecoration: item.isChecked ? 'line-through' : 'none'
            }} onClick={() => {
                list.toggleEditing(id, true);
                setListState(([...list.itemArr]));
            }}>{item.text}</span>
            <button onClick={() => { handleDelete(id) }} style={{
                marginLeft: '1rem'
            }}>x</button>
        </li>
    )
}

const ToDoListItemEditor = (props: Props) => {

    const { id, item, setListState, toggleErrorState } = props

    const editInput = useRef<HTMLInputElement>(null);

    const handleSave = (id: number, text: string) => {
        if (text === "") {
            toggleErrorState(true);
            return;
        }

        toggleErrorState(false);
        list.editItem(id, text);
        list.toggleEditing(id, false);
        setListState([...list.itemArr]);
    }

    const handleCancel = (id: number) => {
        list.toggleEditing(id, false);
        setListState([...list.itemArr]);
    }

    return (
        <>
            <input ref={editInput} type="text" defaultValue={item.text} />
            <br />
            <button onClick={() => { handleSave(id, editInput.current?.value ?? "") }}>Save</button>
            <button onClick={() => { handleCancel(id) }}>Cancel</button>
        </>
    )
}


export class List {
    isError: boolean = false;
    itemArr: ListItem[] = [];

    addItem(text: string): ListItem {
        let tempItem = new ListItem(text)
        this.itemArr.push(tempItem);
        return tempItem;
    }
    toggleEditing(id: number, isEditing: boolean) {
        this.itemArr.forEach(el => el.isEditing = false);
        this.itemArr[id].isEditing = isEditing;
    }
    editItem(id: number, text: string) {
        this.itemArr[id].text = text;
    }

    deleteItem(id: number) {
        this.itemArr.splice(id, 1);
    }

    toggleChecking(id: number) {
        this.itemArr[id].isChecked = !this.itemArr[id].isChecked;
    }

    handleError(isError: boolean): boolean {
        this.isError = isError;
        return this.isError;
    }
}

export class ListItem {
    constructor(public text: string, public isChecked: boolean = false, public isEditing: boolean = false) {
    }
}

const list = new List();