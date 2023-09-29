



document.getElementById("roll").onclick = function(){
    x = Math.floor(Math.random() * 6) + 1
    y = Math.floor(Math.random() * 6) + 1
    z = Math.floor(Math.random() * 6) + 1

    document.getElementById("randomchancesX").innerHTML = x 
    document.getElementById("randomchancesY").innerHTML = y 
    document.getElementById("randomchancesZ").innerHTML = z
}