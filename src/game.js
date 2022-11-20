document.addEventListener("DOMContentLoaded", render);
let state = {
    p:'x',
    board : [["","",""],
           ["","",""],
           ["","",""]],
    round: false
    }

let start = document.querySelector(".start");
start.addEventListener("click", ()=> {
    start.style.display = 'none';
    state.round = true;
    });

let end = document.querySelector(".end");
end.addEventListener("click", ()=> {
    start.style.display = 'block';
    });

const tds = document.querySelectorAll("td");
tds.forEach(element => 
     element.addEventListener("click", ()=>displayBoard(element)));

let col="none";
let row="none";
let win = "none";

function render(){
    state.p = 'x';
    state.board = [["","",""],
                   ["","",""],
                   ["","",""]];
    state.round = false;
}

function displayBoard(e){
    console.log('displayboeard');
    if (state.round){
        state.round = !state.round;
        col = e.getAttribute("attr-col");
        row = e.getAttribute("attr-row");
        state.board[Number(row)][Number(col)] = 'x'
        e.innerHTML ='x'
        return check();
    }else{
        state.round = !state.round; 
        col = e.getAttribute("attr-col");
        row = e.getAttribute("attr-row");
        state.board[Number(row)][Number(col)] = 'o'
        return e.innerHTML = 'O';
    }
}

function check(){
    for(i=0; i<3; i++){
        //check rows:
        if ((state.board[i][0]!='')&&(state.board[i][0]==state.board[i][1]&&state.board[i][0]==state.board[i][2])){
            win = state.board[i][0];
            return alert(`${win} winner!`);
        }
         
        //check cols:
        else if ((state.board[0][i]!='')&&(state.board[0][i]==state.board[1][i]&&state.board[0][i]==state.board[2][i])){
            win = state.board[0][i];
            return alert(`${win} winner!`);
        }
    }
    //check diagonal #1:
    if ((state.board[0][0]!='')&&(state.board[0][0]==state.board[1][1]&&state.board[0][0]==state.board[2][2])){
        win = state.board[0][0];
        return alert(`${win} winner!`);
    }
    //check diagonal #2:
    else if ((state.board[0][2]!='')&&(state.board[0][2]==state.board[1][1]&&state.board[0][2]==state.board[2][0])){
        win = state.board[0][2];
        return alert(`${win} winner!`);
    }
}