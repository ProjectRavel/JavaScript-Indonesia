// nested loops = a loop inside of another loops

let symbols = prompt ("Enter Symbols")
let rows = prompt ("Enter number of Rows")
let columns = prompt ("Enter number of columns") 


for(let i = 1; i <= rows; i+=1){
        for(let j = 1; j <= columns; j+=1){
            document.getElementById("myrectangle").innerHTML += symbols
    }
    document.getElementById("myrectangle").innerHTML += "<br>"
}