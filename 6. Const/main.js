//  Const = variable yang tidak bisa kita ubah nilainya

// Contoh=
/* const nama = "Rafael"
const nama = "KitaubahmenjadiAsep"

console.log(nama) */
// ini bisa terjadinya redeklarasi variable 'nama' dan malah berujung eror pada code maka dari itu const ada konstan dalam artian tidak bisa diubah

// contoh kecil dari pemakai variable const:
const PI = 3.14159
let radius
let kelilinglingkaran

radius = prompt("Enter the radius of a circle")
radius = Number(radius)

// Pemakaian variable & prompt dalam rumus matematika :
// Rumus 
kelilinglingkaran = 2 * PI * radius

console.log ("Keliling Lingkaran adalah:", kelilinglingkaran)