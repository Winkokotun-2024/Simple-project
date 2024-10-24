const gameBoards =document.getElementById("gameBoards");
const ctx =gameBoards.getContext("2d");
let gameWidth =gameBoards.width;
let gameHeight =gameBoards.height;

const scoretext =document.getElementById("scoretext");
const resetbtn =document.getElementById("resetbtn");

let unitsize =25;
let xVelocity =unitsize;
let yVelocity =0; 
let running = false;
let score = 0;
let boardColor = "white";
let foodColor= "red";
let SnakeColor ="lightgreen";
let SnakeBorder ="black";
let foodX;
let foodY;
let snake =[
    
    {x :unitsize *4 ,y :0},
    {x :unitsize *3 ,y :0},
     {x :unitsize *2 ,y :0},
     {x :unitsize,y :0},
     {x :0,y :0},
]

window.addEventListener("keydown" ,changeDirection);
resetbtn.addEventListener("click",resetGame);
gamestart();
function gamestart(){
    running =true;
    scoretext.textContent = score;
    createFood();
    drawFood();
    nextTick();
    
}

function nextTick(){
    if(running){
    setTimeout(()=>{
        clearBoard();
        drawFood();
        moveSnake();
        drawSnake();
        checkGameover();
        nextTick();

    },75);
}else {
    DisplayGameOver();
}
}

function clearBoard(){
    ctx.fillStyle = boardColor;
    ctx.fillRect(0,0,gameWidth,gameHeight);
}

function createFood(){
    function randomNum(min,max) {

    const RadomNumber= Math.round((Math.random() * (max - min) + min)/unitsize)*unitsize;
    return RadomNumber;
    }

    foodX =randomNum(0,gameWidth - unitsize);
    foodY =randomNum(0,gameWidth - unitsize);

    
}   

function drawFood(){
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX,foodY,unitsize,unitsize);

}


function moveSnake(){
    const head ={x:snake[0].x + xVelocity,
        y:snake[0].y + yVelocity
     };
     snake.unshift(head);
     
     
     if(snake[0].x == foodX && snake[0].y == foodY ){
        score+=1;
        scoretext.textContent =score;
        createFood();

     }else{
        snake.pop();
     }

}

function drawSnake(){
 ctx.fillStyle =SnakeColor;
 ctx.strokeStyle = SnakeBorder;
 snake.forEach(snakePart =>{
    ctx.fillRect(snakePart.x,snakePart.y,unitsize,unitsize);
    ctx.strokeRect(snakePart.x,snakePart.y,unitsize,unitsize);

 })


}


function changeDirection(event){
    const keyPressed =event.keyCode;
    
    let left =37;
    let Up =38;
    let right =39;
    let Down=40;

const goingUp =(yVelocity == -unitsize);
 const goingDown =(yVelocity == unitsize);
 const goingLeft =(xVelocity == -unitsize);
 const goingRight =(xVelocity == unitsize);

switch (true){
    case(keyPressed == left && !goingRight):
    xVelocity=-unitsize;
    yVelocity=0;
    break;
    case(keyPressed == right && !goingLeft):
    xVelocity=unitsize;
    yVelocity=0;
    break;
    case(keyPressed == Up && !goingDown):
    xVelocity=0;
    yVelocity=-unitsize;
    break;
    case(keyPressed == Down && !goingUp):
    xVelocity=0;
    yVelocity=unitsize;
    break;
}
}

function checkGameover(){
    switch(true){
        case(snake[0].x <0) :
         running=false;
            break;
       
        case(snake[0].x  >= gameWidth) :
         running=false;
        break;
        
        case(snake[0].y <0) :
         running=false;
        break;
       
        case(snake[0].y >= gameHeight) :
         running=false;
        break;
        }
     for (let i = 1; i < snake.length; i++) {
    if(snake[0].x==snake[i].x && snake[0].y ==snake[i].y){
        running =false;
        

    }
}
}

function DisplayGameOver(){
ctx.font ="50px MV Boli";
ctx.fillStyle = "black";
ctx.textAlign ="center";
ctx.fillText("GameOver!",gameWidth/2,gameHeight/2);
running =false;
}

function resetGame(){
    
    score=0;
    xVelocity =unitsize;
    yVelocity=0;
    let snake =[
    
    {x :unitsize *4 ,y :0},
    {x :unitsize *3 ,y :0},
     {x :unitsize *2 ,y :0},
     {x :unitsize,y :0},
     {x :0,y :0},
];
gamestart();
}