// array.reduce() = membuat array menjadi 1 value kesatuan anjay

let harga = [1,2,3,4,5,6,7,8,9,10]

let total = harga.reduce(penjumlahan)
console.log(`Jadi Harga total yang sudah anda belanjakan adalah $${total}`)


function penjumlahan(x,y){
    return x + y
}
