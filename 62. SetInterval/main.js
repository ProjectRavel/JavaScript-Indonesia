
let count = 0
let hasil = prompt("Seberapa Besar Cinta ku padamu")
hasil = Number(hasil)
let interval  = setInterval(Test, 1)

function Test(){
    
    if(count < hasil){
        count +=1
        document.getElementById("count").innerHTML = `${count}%`
    }else{
        clearInterval("interval")
    }
    
}

