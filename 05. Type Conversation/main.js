// type conversation = mengubah tipe data suatu nilai ke yang lain (strings, angka, booleans)

let age = prompt("how old are you")
// Ketika kita memakai prompt, mau kita mengisinya dengan angka atau pun huruf. komputer akan selalu membacanya dengan tipe data string

console.log (typeof age) // Pembuktian

// Namun ketika kita memakai Number(Value) itu akan mengubah tipe data prompt yang tadinya string ke number
age = Number(age)
console.log (typeof age)
// Kenapa jika kita ingin memasukkan angka ke prompt itu kita harus ganti ke tipe number? supaya kita bisa menggunakan operasi matematika dalam value prompt tersebut
//contoh:

age += 1
console.log ("Selamat ulang tahun Umur mu sekarang "+ age + ". Selamat Ya!") // + dalam console log adalah cara kita menambahkan deklarasi var ke dalam baris kata

// Contoh Lain dari penggunaan type conversation

let x = Number(3.14)
let y = String(3.14)
let z = Boolean("pizza") // Tidak berisi value = false, Berisi value = true

console.log (x , typeof x)
console.log (y, typeof y)
console.log (z, typeof z)