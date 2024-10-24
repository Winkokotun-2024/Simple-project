let TimeDisplay =document.getElementById("TimeDisplay");
let startbtn =document.getElementById("startbtn");
let pausebtn =document.getElementById("pausebtn");
let resetbtn =document.getElementById("resetbtn");

let startTime =0;
let elaspedTime =0;
let paused = true;
let intervalTime;
let hrs=0;
let mins =0;
let secs =0;

startbtn.addEventListener("click",()=>{
    if(paused){
        paused = false;
        startTime = Date.now() - elaspedTime;
        intervalTime=setInterval(updateTime,75);
    }
});
pausebtn.addEventListener("click",()=>{
    if(!paused){
        paused = true;
        elaspedTime = Date.now() - startTime;
        clearInterval(intervalTime);
    }
});
resetbtn.addEventListener("click",()=>{
    startTime =0;
 elaspedTime =0;
 hrs=0;
 mins =0;
 secs =0;

 TimeDisplay.textContent = "00 : 00: 00";
});

function updateTime(){
    elaspedTime =Date.now() - startTime ;

    let hrs = Math.floor(elaspedTime / (1000 * 60 * 60) % 60);
    let mins = Math.floor(elaspedTime / (1000 * 60 ) % 60);
    let secs = Math.floor((elaspedTime / 1000) % 60);
    console.log(secs);

    hrs=NumberTwo(hrs);
    mins=NumberTwo(mins);
    secs=NumberTwo(secs);


    TimeDisplay.textContent = `${hrs} : ${mins} : ${secs}`;

    function NumberTwo(unit){
        return ("0" + unit).length >2 ? unit : "0" + unit;
        
   }
}


