// Eror = objek yang ada sesuatu yang salah bisa itu berupa:
//        can't open a file
//        lost connection
//        User types incorrect input
//        Type Eror
// throw = mengesekusi sebuah user input

try{
    x = prompt("Enter a number")
    x = Number(x)

    if(isNaN(x)) throw "That wasnt a number"
    if(x == "") throw "That was Empty"
    console.log(x)
}
catch(Eror){
    console.log(Eror)
}
finally{
    console.log("This Always execute")
}