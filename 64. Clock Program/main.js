// Clock Program = Mari kita baut program Jam bersama-sama

time()
setInterval(time2,1)

function time(){
    let years = new Date().getFullYear()
    let month = new Date().getMonth()
    let dates = new Date().getDate()

    document.getElementById("mylabel").innerHTML = `${years}/${month}/${dates}`
}

function time2(){
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    if (minutes < 10){
        minutes = `0${minutes}`
    }else{
        minutes = minutes
    }
    let second  = new Date().getSeconds()
    if (second < 10){
        second = `0${second}`
    }else {
        second = second
    }
    let millseconds = new Date().getMilliseconds()

    



    document.getElementById("mylabel2").innerHTML = `${hours}:${minutes}:${second}:${millseconds}`

   

    
}