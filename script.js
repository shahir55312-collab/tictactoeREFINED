const Score = {
    wins :0,
    losses:0,
    ties:0,
};
let boardstatus=["","","","","","","","",""]
let gameActive=true;
const cells = document.querySelectorAll(".cell");
let currentPlayer = 'X';

cells.forEach((cell,index) => {
  cell.addEventListener("click", function(){
    if (cell.textContent === "" && gameActive) {
      cell.textContent = currentPlayer;
      boardstatus[index]=currentPlayer;
checkwin();
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      
    }
    
  });
});
const winconditions = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,4,8],
[0,3,6],
[2,4,6],
[2,5,8],
[1,4,7]
];
function checkwin(){
    let roundwon = false;
for(let i=0;i<winconditions.length;i++){
    const condition = winconditions[i];
    const cellA = boardstatus[condition[0]];
const cellB = boardstatus[condition[1]];
const cellC = boardstatus[condition[2]];
if(cellA ===""|| cellB ===""|| cellC===""){
    continue;
}
if(cellA === cellB && cellB === cellC){
restartgame();
    roundwon=true;
if(cellA==='X'){
    Score.wins+=1;
}
else{
    Score.losses+=1;
}

restartgame();
}
if(!roundwon&&
boardstatus[0]!==""&&
boardstatus[1]!==""&&
boardstatus[2]!==""&&
boardstatus[3]!==""&&
boardstatus[4]!==""&&
boardstatus[5]!==""&&
boardstatus[6]!==""&&
boardstatus[7]!==""&&
boardstatus[8]!==""
){
    gameActive=false;
Score.ties+=1;

restartgame();
}
}
document.querySelector('.js-move').innerHTML=
`wins:${Score.wins},Losses:${Score.losses},
Ties: ${Score.ties}`;
}
function restartgame(){
 boardstatus=["","","","","","","","",""];
currentPlayer = 'X';
gameActive = true;
cells.forEach(cell =>{
    cell.textContent="";
});
}

