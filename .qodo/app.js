let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let satrt;

let sec = 0;
let min = 0;
let hur = 0;
function satrtfnc(){
satrt=setInterval (function(){
    sec++
if(sec === 60){
sec = 0;
min++

}
if(min === 60){
min = 0;
hur++
}
if(sec < 10){
second.innerHTML = "0"  +  sec;
} else{
    second.innerHTML = sec;
}

 
if(min < 10){
minute.innerHTML = "0" +  min;

} else{
minute.innerHTML = min;
}
if(hur < 10){
hour.innerHTML = "0" +  hur;
} else{
    hour.innerHTML = hur;
}
},1000)
}






function stopfnc(){
clearInterval (satrt)
console.log("Stop Watch Is Stop");

}
function resetfnc(){
    clearInterval (satrt);
    hour.innerHTML = "00"
    second.innerHTML = "00"
    minute.innerHTML = "00"
    sec = 0;
    min = 0;
    hur = 0;
    console.log("Stop Watch Is Reset");
}





function btnlight(){
document.body.style.backgroundColor = "white";
hour.style.color = "black"
minute.style.color = "black"
second.style.color = "black"
}

function btndark(){
document.body.style.backgroundColor = "black";
hour.style.color = "white"
minute.style.color = "white"
second.style.color = "white"
}
















