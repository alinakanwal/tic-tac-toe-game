let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-game");
let msg = document.querySelector("#winner");
let msgcontainer = document.querySelector(".msg-container");
let turn0 = true;
let count = 0;

let winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetgame = () =>{
    turn0 = true;
    count = 0;
    enableboxes();
    msgcontainer.classList.add("hide")

}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "o";
      turn0 = false;
    } else {
      box.innerText = "x";
      turn0 = true;
    }
    box.disabled = true;
    count++;

    let isWinner =  checkwinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
    
  });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
   disableboxes();
  };


const disableboxes = () =>{
for (box of boxes){
    box.disabled = true;
}
};

const enableboxes = () =>{
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    };


const showwinner = (winner) => {
  msg.innerText = `congratulation,winner is "${winner}"`;
  msgcontainer.classList.remove("hide");
  disableboxes();
};

function checkwinner() {
  for (pattren of winpatterns) {
    let pos1val = boxes[pattren[0]].innerText;
    let pos2val = boxes[pattren[1]].innerText;
    let pos3val = boxes[pattren[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showwinner(pos1val);
      }
    }
  }
};

newgamebtn.addEventListener("click", resetgame);
resetbtn .addEventListener("click", resetgame);
