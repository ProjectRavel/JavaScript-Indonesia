let numbers = [11,24,21,10,8,11,18,20]


numbers
.filter(checkage)
.forEach(print)

function checkage(x){
    return x >= 18
}

function print(x){
    console.log (x)
}