let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");


function satrtfnc(){
let sec = 0;
let min = 0;
let hur = 0;
setInterval (function(){
    sec++
if(sec === 60){
// sec = 0;
min++

}
if(min === 60){
// min = 0;
hur++
}
if(sec < 10){
second.innerHTML = "0" +  sec;
} else{
    second.innerHTML = sec;
}
},1000)
 
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

}


// function stopfnc(){
// clearInterval (function (){

// })
// }


