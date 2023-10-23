// //Simple Declare
// const timedisplay = document.querySelector("#count");
// const startbtn = document.querySelector("#startBtn");
// const resetbtn = document.querySelector("#resetBtn");
// const pausebtn = document.querySelector("#pauseBtn");

// // Declare Number
// let starttimer = 0;
// let elapsedtime = 0;
// let paused = true;
// let intervalid;
// let hrs = 0;
// let mins = 0;
// let secs = 0;

// startbtn.addEventListener("click", () =>{
//    if(paused){
//     paused = false
//     starttimer = Date.now() - elapsedtime
//     intervalid = setInterval(updatetime, 1000)
//    } 
// });
// pausebtn.addEventListener("click", () => {
//     if(!paused){
//         paused = true
//         elapsedtime = Date.now() - starttimer
//         clearInterval(intervalid)
//     }
    
// });
// resetbtn.addEventListener("click", () => {
//     paused = true
//     clearInterval(intervalid)
//     starttimer = 0;
//     elapsedtime = 0;
//     secs = 0
//     mins = 0
//     hrs = 0
//     timedisplay.textContent = `00:00:00`
// });

// function updatetime(){
//     elapsedtime = Date.now() - starttimer

//     secs = Math.floor((elapsedtime/1000) % 60);
//     mins = Math.floor((elapsedtime / (1000 * 60)) % 60);
//     hrs = Math.floor((elapsedtime / (1000 * 60 * 60)) % 60);

//     hrs = pad(hrs)    
//     mins = pad(mins)
//     secs = pad(secs)

//     timedisplay.textContent = `${hrs}:${mins}:${secs}`

//     function pad(unit) {
//         return unit < 10 ? `0${unit}` : unit.toString();
//       }      
     
   
// }

const count = document.getElementById("count")
const startbtn = document.getElementById("startBtn")
const pausebtn = document.getElementById("pauseBtn")
const resetbtn = document.getElementById("resetBtn")

let paused = true;
let starttimer;
let elapsedtime = 0;
let hours = 0;
let mins = 0;
let secs = 0;

startbtn.addEventListener("click", () => {
    if(paused){
        paused = false
        starttimer = Date.now() - elapsedtime
        intervalcount = setInterval(startcounting, 1000)
    }
})

pausebtn.addEventListener("click", () => {
    if(!paused){
        paused = true
        starttimer = Date.now() - elapsedtime
        clearInterval(intervalcount)
    }
})

resetbtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalcount)
    starttimer;
    elapsedtime = 0;
    hours = 0;
    mins = 0;
    secs = 0;
    count.textContent = `00:00:00`
})

function startcounting(){
    elapsedtime = Date.now() - starttimer

    secs = Math.floor((elapsedtime / 1000) % 60)
    mins = Math.floor((elapsedtime / (1000 * 60)) % 60)
    hours = Math.floor((elapsedtime / (1000 * 60 * 60) % 60))

    secs = pad(secs)
    mins = pad(mins)
    hours = pad(hours)

    count.textContent = `${hours}:${mins}:${secs}`

    function pad(input){
        return input < 10 ? `0${input}` : input.toString()
    }}