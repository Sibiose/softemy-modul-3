let player = 'X';
let board = [
    'X', '', '',
    '', '', '',
    '', '', '0',
​
]
let buttons = document.getElementsByClassName("button");
const NOBODY = '';
​
​
function updateBoard() {
   for (let i = 0; i < board.length; i++) {
      let item = board[i];
      let button = buttons[i];
      button.textContent = item;
   }
}
​
​
document.getElementById("reset").addEventListener("click", () => {
    board = new Array(9).fill('');
    updateBoard();
}); 
​
for (let i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener("click", () => {
       board[i] = player;
       updateBoard();
   }); 
}
​
updateBoard();