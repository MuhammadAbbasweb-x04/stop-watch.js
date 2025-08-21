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
console.log("hello");

}
function resetFnc(){
    clearInterval(satrt);
    sec = 0;
    min = 0;
    hur = 0;
}




