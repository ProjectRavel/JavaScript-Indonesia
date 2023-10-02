// on expressions = function without a name (anonymous function)
//                  avoid poluting the global scope with names
//                  Write it, the forget about

let count = 0

function increasebutton(){
    count += 1
    document.getElementById("mylabel").innerHTML = count
}

function decreasebutton(){
    count -= 1
    document.getElementById("mylabel").innerHTML = count
}

function resetbutton(){
    count = 0
    document.getElementById("mylabel").innerHTML = count
}