// Array = sebuah variable yang bisa menyimpanan banyak value data


// Contoh dari penggunaan sebuah array
let fruits = ['apple', 'banana', 'watermelon'] //Didalam array ada yang disebut index, dan index itu adalah suatu data dalam sebuah array dan index selalu dimulai dari 0 karena komputer selalu memulai sebuah perhitungan dari 0

fruits.unshift("melon") // unshift = menambahkan element padda array namun di awal index
fruits.push("lemon") //Push = menambahkan element pada array namun diakhir index
fruits.pop(); //pop = untuk menghapus element diakhir index misalnya pada kasus ini "lemon"
fruits.shift(); // shift = untuk menghapus element diawal index misalnya pada kasus ini "melon"


let length = fruits.length // Cara mengetahui length pada array
let index = fruits.indexOf("apple") //cara mengetahui index pada value yang ingin dicari

console.log(fruits) 
console.log(length)
console.log(index)
