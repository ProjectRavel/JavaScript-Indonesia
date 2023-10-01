// Array = sesuatu yang bisa menyimpan banyak data

let buahbuahan = ['jeruk','apel','pisang']

console.log(buahbuahan[2])

buahbuahan.push("lemon") // Menambahkan Element di akhir suatu array
buahbuahan.pop() // Menghapus Element Akhir
buahbuahan.unshift ("mangga") //Menambahkan element di awal array
buahbuahan.shift() //Menghapus Element di awal suatu array

let length = buahbuahan.length
let index = buahbuahan.indexOf("apel")

console.log (length)
console.log (index)

// for(i = length - 1; i >= 0 ;i = i-1){
//     console.log(buahbuahan[i])
// }

for (let i of buahbuahan){
    console.log(i)
}