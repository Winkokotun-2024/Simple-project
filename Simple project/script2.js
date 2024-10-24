



// // // let item = "crytoCurrency";
// // // let price =500;

// // // let c1=setTimeout(firstmessage,3000,item,price);
// // // let c2=setTimeout(secondmessage,3000,item,price);
// // // let c3=setTimeout(thirdmessage,3000,item,price);

// // // function firstmessage(){
// // //     alert(`buy1 this ${item} for $${price}`);

// // // }
// // // function secondmessage(){
// // //     alert(`buy2 this ${item} for $${price}`);
// // // }
// // // function thirdmessage(){
// // //     alert(`buy3 this ${item} for $${price}`);
// // // }

// // // document.getElementById("buy").onclick = ()=>  {
// // //     clearTimeout(c1);
// // //     alert('thank you!!');
// // // }



// // let label=document.getElementById("mylabel");
// // setInterval(update,1000);

// // function update(){
// //     let date =new Date();

// //     label.innerHTML =myTime(date);

    

// //     function myTime(date){
// //         let hour =date.getHours();
// //         let minute =date.getMinutes();
// //         let seconds =date.getSeconds();

        

// //         let Time = hour>=12 ?"PM" : "Am";

// //         h = hour %12 || 12;
// //         hour = FormatZero(h);
// //         minute = FormatZero(minute);
// //         seconds = FormatZero(seconds);

// //         function FormatZero(time){
// //          time = time.toString();
// //          return time.length < 2 ? "0" + time : time; 
// //         }

// //         return `${hour}:${minute}:${seconds} ${Time}`;


// //     };


    

// // }
// // let para = document.getElementById("mypara");


// //     let wait= time => new Promise(resolve => {
// //         setTimeout(resolve,time);
// //     })

// //     wait(1000).then(() =>{ para.innerHTML ="Thank you"});

// // // const promise = new Promise((resolve,reject)=> {
// // //     let fileloaded = false;

// // //     if(fileloaded){
// // //         resolve("File loaded");
// // //     }else{
// // //         reject("File not loaded!!");
// // //     }
    
// // // });
// // // promise.then((value)=> console.log(value))
// // //         .catch((error) => console.log(error));

// // // ;
// // async function loadfile(){
// //     let fileloaded = false; 

// //     if(fileloaded){
// //         return "File loaded.";
// //     }else{
// //         throw "File not loaded !!";
// //     }
// // }

// // async function displayFunction() {
// //     try{
// //     document.getElementById("h2").innerHTML = await loadfile();

// // }
// // catch(error){
// //     document.getElementById("h2").innerHTML = error;
 
// // }
// // }
// // displayFunction();




// // let element =document.querySelector("body");
// // let arr = Array.from(element.children);

// // arr.forEach((arr)=>{
    
    
// //     arr.style.backgroundColor = "green"

// // });


// // let car = document.querySelector("#Drive");

// // let li =document.createElement("li");

// // li.textContent = "truck";

// // car.insertBefore(li,car.getElementsByTagName("li")[1]);


// // let outerDiv =document.getElementById("outerDiv");
// // let innerDiv =document.getElementById("innerDiv");

// // outerDiv.style.backgroundColor = "lightgreen";
// // outerDiv.style.width = "300px";
// // outerDiv.style.height = "200px";
// // innerDiv.style.backgroundColor = "red";
// // innerDiv.style.width = "100px";
// // innerDiv.style.height = "100px";

// // outerDiv.onmouseover = Dosomething;
// // innerDiv.onmouseover = Dosomething;
// // outerDiv.onmouseout = Dosomethingelse;
// // innerDiv.onmouseout = Dosomethingelse;

// // function Dosomething(){
// //     //alert("You selected id is  "+`${this.id}`);
// //     this.style.backgroundColor = "blue";
// // }

// // function Dosomethingelse(){
// //     //alert("You selected id is  "+`${this.id}`);
// //     this.style.backgroundColor = "lightgreen";
// // }


// // let btn =document.getElementById("togglebtn");
// // let image =document.querySelector("#image");

// // btn.style.height = "50px";
// // btn.style.width = "70px";
// // image.style.width = "300px";
// // image.style.height = "300px";

// // btn.onmouseover = dosomething;
// // btn.onmouseout = dosomething;

// // function dosomething(){
// //     if(image.style.display ==  "none"){
// //         image.style.display = "block";
// //     }else{
// //         image.style.display = "none";
// //     }
// // }


// window.onload = dosomething;
// let image =document.querySelector("#image");
// function dosomething(){
//     image.style.display = "block";
    
    
    

// }


// const div = document.getElementById("mydiv");


// div.style.backgroundColor = "lightgreen";
// div.style.height ="100px";
// div.style.width ="100px";
// div.style.border ="1px solid black";
// div.style.position ="relative";
// window.addEventListener("keydown",move);
// let y=0;
// let x=0;
// function move(event){
//     switch(event.key){
//         case "ArrowDown":
//              y +=5;
//         div.style.top = y +"px"; 
//         break;
//         case "ArrowUp" :
//              y -=5;
//         div.style.top = y + "px"; 
//         break;
//         case "ArrowRight": x +=5;
//         div.style.left = x +"px"; 
//         break;
//         case "ArrowLeft": x -=5;
//         div.style.left = x +"px"; 
//         break;
//     }
// }

// const btn =document.getElementById("togglebtn");

// btn.addEventListener("click" ,frame);

// function frame(){
//     let timerId = null;
//     let x=0;
//     let y=0;
    
// timerId = setInterval(move,5);

// let gg=0;
// function move(){
    
    
//     if(gg>=1800){
//         clearInterval(timerId);
//     }else{
//         gg+=3;
//         x+=1;
//         y+=1;
//         div.style.top = x + "px";
//         div.style.left = y + "px";
//         div.style.transform = "rotateZ("+gg+"deg)";

        
//     }


// }

// }

// let canvas =document.getElementById("mycanvas");

// let context = canvas.getContext("2d");

// context.beginPath();

// context.moveTo(0,0);
// context.lineTo(500,500);
// context.stroke();
// document.cookie= "firstName=SportRo;expires=Sun, 17 October 2024 12:00:00 UTC;path=/";
// console.log(document.cookie);

// setcookie("Min Min","haveGirlFriends",365);
// setcookie("Kyaw Kyaw","haveGirlFriends",365);

console.log(getCookie("firstName"));

function setcookie(name,value,dayTotime){

    const date =new Date();
    date.setTime(date.getTime() + (dayTotime * 24 * 60 * 60 * 1000));
    const expire ="expires="+date.toUTCString();
    document.cookie =`${name} ${value};${expire};path=/`;



}

function deletecookie(name){
    setcookie(name,null,null);
}

function getCookie(name,value){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split(";");
    console.log(cArray);
    let result = null ;
    cArray.forEach(element =>{
        if(element.indexOf(name) ==0 )
        result =element.substring(name.length+1);
        result +=element.split(";",value);
    })

    return result;



    // let result =null;




    // return result;
}
let StartTime =0;
let elaspedTime =0;

elaspedTime =Date.now() - StartTime;

console.log(Math.floor(elaspedTime /(1000 *60 ) % 60));












