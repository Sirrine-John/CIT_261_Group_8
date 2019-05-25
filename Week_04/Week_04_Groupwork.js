const tictactoe = document.querySelector(".tictactoe");
const reset = document.querySelector("#reset");
const ex = "X";
const oh = "O";
const winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let exStatus = [];
let ohStatus = [];
let currentPlayer = ex;

function takeTurn(box){
    box.target.innerHTML = currentPlayer;
    if (currentPlayer === ex) {exStatus.push(parseInt(box.target.id.substring(3)));
        getStatus(currentPlayer); currentPlayer = oh;}
    else {ohStatus.push(parseInt(box.target.id.substring(3)));
        getStatus(currentPlayer); currentPlayer = ex;}
};
function resetBoard(){
    for (let i = 0; i < tictactoe.children.length;i++) {
        tictactoe.children.item(i).innerHTML = '';
    };
    document.getElementById("TitleBar").innerHTML = "Tic-Tac-Toe"
    exStatus = [];
    ohStatus = [];
};
function getStatus(Player){
    if (Player == ex){
        exStatus.sort();
        winningCombos.forEach(element => {
            if (exStatus.includes(element[0]) && exStatus.includes(element[1]) && exStatus.includes(element[2])){
                document.getElementById("TitleBar").innerHTML = "X won!";   
            }
        });
    } else{
        ohStatus.sort();
        winningCombos.forEach(element => {
            if (ohStatus.includes(element[0]) && ohStatus.includes(element[1]) && ohStatus.includes(element[2])){
                document.getElementById("TitleBar").innerHTML = "O won!";   
            }
        });
    }
}

tictactoe.addEventListener("touchend", takeTurn);
reset.addEventListener("touchend", resetBoard);
