let grades = [76,90,99,65,83,93,100,67]

let sortingdesce = grades.sort(descending).forEach(print)

let sortingasce = grades.sort(ascending).forEach(print)

function descending(a,b){
    return b - a
}

function ascending(a,b){
    return a - b
}

function print(x){
    console.log(x)
}