let counter = 0

document.getElementById("decrease").onclick = function(){
    counter -= 1
    document.getElementById("count").innerHTML = counter 
}

document.getElementById("reset").onclick = function(){
    counter = 0
    document.getElementById("count").innerHTML = counter
}

document.getElementById("increase").onclick = function(){
    counter += 1
    document.getElementById("count").innerHTML = counter 
}