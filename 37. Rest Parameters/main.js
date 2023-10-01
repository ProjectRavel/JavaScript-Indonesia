// Rest Parameters = mewakili jumlah yang tidak
//                   terbatas parameter
//                   (mengemas argumen dalam array)


// let a = 1
// let b = 2
// let c = 3
// let d = 4
// let e = 5

// console.log (sum(a, b, c, d , e))


// function sum(...numbers){
//     total = 0
//     for(let number of numbers){
//         total += number
//     }
//     return total
// }

let n1 = 2
let n2 = 4
let n3 = 6


function test(...numbers){
    totaldari = 0
    for(let number of numbers){
        totaldari += number
    }
    return totaldari
}

console.log (test(n1,n2,n3))