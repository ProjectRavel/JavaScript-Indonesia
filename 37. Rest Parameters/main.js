// Rest Parameters = mewakili jumlah yang tidak
//                   terbatas parameter
//                   (mengemas argumen dalam array)


let a = 1
let b = 2
let c = 3
let d = 4
let e = 5

console.log (sum(a, b, c, d , e))

// jadi sum(apapun) kita masukkan ke function
function sum(...numbers){
    //... berguna untuk mengemas 1 per 1 argumen

    total = 0
    // kita buat loop untuk pertambahan dalam sum()
    for(let number of numbers){
        total += number //total = (a+b+c+d+e)
    }
    return total //kita return supaya total ini bisa jadi deklarasi diluar function
}
