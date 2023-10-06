
let count = 0
let max = prompt(`set a number`)
max = Number(max)

const mytimer = setInterval(countup,1)

function countup(){
    count += 1

    if (count <= max){ 
        document.getElementById("count").innerHTML = count
    }else if(count >= max){
        clearInterval(mytimer)
    }
    

}


