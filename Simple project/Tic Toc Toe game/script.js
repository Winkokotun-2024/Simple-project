const cell =document.querySelectorAll(".cell");
const turnIndex=document.querySelector("#turnIndex");
const resetbtn =document.querySelector("#resetbtn");
let runnings ="false";
let currentplayer ;
const WinContainer =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    
];
let options =["","","","","","","","",""];

intializeGameplay();
function intializeGameplay(){
     currentplayer ="X"; 
    cell.forEach(cell => cell.addEventListener('click',cellclicked));
    resetbtn.addEventListener("click",resetgame);
    turnIndex.textContent = `${currentplayer}'s Turns.`;

}
function cellclicked(){
    const cellIndex =this.getAttribute("cellIndex");
    if(options[cellIndex] !="" || !runnings){
        return;
    }
    updateCell(this,cellIndex);
    
    checkedwin();
}
function updateCell(cell,index){
    cell.textContent = currentplayer;
    options[index]=currentplayer;
    
}
function changeplayer(){
    currentplayer = (currentplayer == "X") ? "O" : "X";
    turnIndex.textContent = `${currentplayer}'s Turns`;
}
function checkedwin(){
    let Roundwins =false;
    for (let i = 0; i < WinContainer.length; i++) {
        const condition = WinContainer[i];
        const cellA =options[condition[0]];
        const cellB =options[condition[1]];
        const cellC =options[condition[2]];
        if(cellA == "" || cellA == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            Roundwins = true;
            runnings = false;
            break;
            
           
        }
        
    }
    if(Roundwins){

        turnIndex.textContent =`${currentplayer}'s wins.`
        runnings = false;
    }else if(!options.includes("")){
        turnIndex.textContent =`Draw Again!`;
        runnings=false;
    }else{
        changeplayer();
    }
    
}
 function resetgame(){
    currentplayer ="X";
    options =["","","","","","","","",""];
    turnIndex.textContent =`${currentplayer}'s turns.`;
    cell.forEach(cell => cell.textContent = "");
    runnings = true;
 }
