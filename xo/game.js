
let player = 'X';
let buttons = document.getElementsByClassName("button");


for (let i = 0; i < buttons.length; i++) {
   
   let button = buttons[i];
   console.log(button);
   
   button.addEventListener("click", () => {
      button.classList.add("clicked");
      button.textContent = player;
      if (player === 'X')
          player = '0';
      else 
          player = 'X';
   }); 
}

