
let payment = "Bitcoin Currency";
let price = 69.69;

let timer1 = setTimeout(firstmessages,3000, payment, price)
let timer2 = setTimeout(secondmessages,6000)
let timer3 = setTimeout(thirdmessages,9000)

function firstmessages(payment, price){
    alert(`Buy this ${payment} for $${price}`)
}
function secondmessages(){
    alert(`this is not a scam`)
}
function thirdmessages(){
    alert(`DO ITTT!!!!`)
}

document.getElementById("mybutton").onclick = function(){
    clearTimeout(timer1)
    clearTimeout(timer2)
    clearTimeout(timer3)
    alert(`Thanks for buy`)
}