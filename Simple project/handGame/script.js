let btn=document.querySelectorAll(".Drawbtn");
let playertext =document.getElementById("playertext");
let computertext =document.getElementById("computertext");
let resulttext =document.getElementById("resulttext");

let player =null;
let compter=null;
let result ;
btn.forEach(btn => {
    btn.addEventListener("click",()=>{
        player=btn.textContent;
        
        CompareWith();
        playertext.textContent = `Player :${player}`;
         computertext.textContent = `Computer :${computer}`;
         resulttext.textContent = resultCompare();

    })
    
})
function CompareWith(){
    let randomtext = Math.floor(Math.random() *3)+1;
    
    switch(randomtext){
        case 1: computer = "Rock";
        break;
        case 2: computer = "Paper";
        break;
        case 3: computer = "Scissors";
        break;
    }

    
 }

 function resultCompare(){
    
    if(compter == player){
        return "Draw !";
    }else if(computer == "Rock"){
        return (player == "Paper") ? "You win!" : "You lose!";
    }else if(computer == "Paper"){
        return (player == "Scissors") ? "You win!" : "You lose!";
    }else if(computer == "Scissors"){
        return (player == "Rock") ? "You win!" : "You lose!";
    }
 }
