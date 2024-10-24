const gameBoards = document.getElementById("gameBoards");
const ctx =gameBoards.getContext("2d");
const gameWidth = gameBoards.width;
const gameHeight=gameBoards.height;
const scoretext = document.getElementById("scoreText");
const resetbtn =document.getElementById("resetbtn");
let boardBgColor ="forestgreen";
let piddle1Color ="lightblue";
let piddle2Color ="red";
let piddleborderColor = "black";
let piddleSpeed =50;
let ballColor ="yellow";
let ballBorder ="black";
let ballradius = 12.5;
let ballSpeed =1;
let ballX = gameWidth /2;
let ballY = gameHeight /2;
let ballXDirection =0;
let ballYDirection =0;

let intervalID;
let player1Score =0;
let player2Score =0;
let piddle1 ={
    width : 25,
    height : 100,
    x :0,
    y :0
}
let piddle2 ={
    width : 25,
    height : 100,
    x :gameWidth-25,
    y :gameHeight-100
}

window.addEventListener("keydown",changeDirection);
resetbtn.addEventListener("click",resetGame);

gamestart();

 function gamestart(){
    

   
    createBall();
    
    nextTick();
    
       
       
 };
 function nextTick(){
    
    intervalID =setTimeout(()=>{
        clearBoard();
        drawPiddle();
        moveBall();
        drawBall(ballX,ballY);
        checkCollision();
        nextTick();
    },10);

 };
 function clearBoard(){
    ctx.fillStyle =boardBgColor;
    ctx.fillRect(0,0,gameWidth,gameHeight);
 };
 function drawPiddle(){
    ctx.strokeStyle = piddleborderColor;
    ctx.fillStyle = piddle1Color;
    ctx.fillRect(piddle1.x,piddle1.y,piddle1.width,piddle1.height);
    ctx.strokeRect(piddle1.x,piddle1.y,piddle1.width,piddle1.height);
    
    ctx.fillStyle =piddle2Color;
    ctx.fillRect(piddle2.x,piddle2.y,piddle2.width,piddle2.height);
    ctx.strokeRect(piddle2.x,piddle2.y,piddle2.width,piddle2.height);
    
};
 function createBall(){
    ballSpeed =1;
    if(Math.round(Math.random()) == 1){
        ballXDirection =1;
    }else{
        ballXDirection =-1;
    }
    if(Math.round(Math.random()) == 1){
        ballYDirection =1;
    }else{
        ballYDirection =-1;
    }
     ballX = gameWidth /2;
     ballY = gameHeight /2;
     drawBall(ballX,ballY);
 };
 function moveBall(){
    ballX += (ballSpeed * ballXDirection);
    ballY += (ballSpeed * ballYDirection);

 };
 function drawBall(ballX,ballY){
    ctx.fillStyle =ballColor;
    ctx.strokeStyle =ballBorder;
    ctx.beginPath();
    ctx.arc(ballX,ballY,ballradius,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
 };
 function checkCollision(){
   if(ballY <= 0 +ballradius){
    ballYDirection *=-1;
   }
    if(ballY >=gameHeight-ballradius){
        ballYDirection *=-1;
    }
    if(ballX <=0){
    player2Score +=1;
    updateScore();
    createBall();
    return;
    }
    if(ballX >=gameWidth){
        player1Score +=1;
        updateScore();
        createBall();
        return;
        }

        if(ballX <= (piddle1.x + piddle1.width+ ballradius)){
            if(ballY > piddle1.y && ballY <piddle1.y +piddle1.height){
                ballX = (piddle1.x + piddle1.width) +ballradius;
                ballXDirection *=-0.5;
                ballSpeed +=1;
            }
        }
        if(ballX >= piddle2.x - ballradius){
            if(ballY > piddle2.y && ballY <piddle2.y +piddle2.height){
                ballX = piddle2.x -ballradius;
                ballXDirection *=-1;
                ballSpeed +=1;
            }
        }
 };
 function changeDirection(event){
    const keyPressed =event.keyCode;
    const piddle1Up =87;
    const piddle1Down =83;
    const piddle2Up =38;
    const piddle2Down =40;
    switch(keyPressed){
        case(piddle1Up): 
        if(piddle1.y > 0){ 
            piddle1.y -=piddleSpeed;
        }
       
        break;
        case(piddle1Down): 
        if(piddle1.y<gameHeight-piddle1.height){
        piddle1.y +=piddleSpeed;
        }
        break;
        case(piddle2Up): 
        if(piddle2.y > 0){ 
            piddle2.y -=piddleSpeed;
        }
       
        break;
        case(piddle2Down): 
        if(piddle2.y<gameHeight-piddle2.height){
        piddle2.y +=piddleSpeed;
        }
        break;
    }
 };
 function updateScore(){
    scoretext.textContent =`${player1Score} : ${player2Score}`;
 };
 function resetGame(){
   
player1Score =0;
player2Score =0;
ballX =0;
ballY =0;
ballSpeed =1;
ballXDirection =0;
ballYDirection =0;
let piddle1 ={
    width : 25,
    height : 100,
    x :0,
    y :0
}
let piddle2 ={
    width : 25,
    height : 100,
    x :gameWidth-25,
    y :gameHeight-100
}

updateScore();
clearInterval(intervalID);
gamestart();
 };

 
//gameHeight-piddle1.height