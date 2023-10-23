let date = new Date()
// let year = date.getFullYear()
// month = date.getMonth()
// dayofmonth = date.getDate() // Day of Month
// dayofweek = date.getDay()
// hour = date.getHours()
// minutes = date.getMinutes()
// second = date.getSeconds()

// date = date.toLocaleString()

document.getElementById("mylabel").innerHTML = formatdate(date) +" "+ formattime(date)


function formatdate(date){
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()

    return `${month}/${day}/${year}`
}

function formattime(date){
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let second = date.getSeconds()
    hour = (hour % 12) || 12
    if(hour >= 12){
        return `${hour}:${minutes}:${second} ${"pm"}`
    }else{
        return `${hour}:${minutes}:${second} ${"am"}`
    }
}