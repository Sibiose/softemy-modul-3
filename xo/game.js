
let player = 'X';
let buttons = document.getElementsByClassName("button");

let board = new Array(9).fill('');
const NOBODY = '';

function updateBoard(){
    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        let item = board[i];

        button.textContent = item;
    }
    
}

function findWinner() {
    if (buttons[0].textContent === buttons[1].textContent && buttons[1].textContent === buttons[2].textContent)
        return buttons[0].textContent;
    return NOBODY;
}

for (let i = 0; i < buttons.length; i++) {
   
    let button = buttons[i];
    button.addEventListener("click", () => {
        button.classList.add("clicked");
        board[i] = player;
        updateBoard();
    });
}

document.getElementById('reset').addEventListener('click', ()=>{
    board = Array(9).fill('');
    updateBoard();
})