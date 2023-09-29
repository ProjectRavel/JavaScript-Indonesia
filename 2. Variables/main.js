/* Variable adalah cara kita menyimpan value */
/* Sebuah variabel berperilaku seolah-olah itu adalah nilai yang dikandungnya */

/* 2 cara: */
/* 1. deklarasi (var, let, const) */
/* 2. Assignment ('=' Assignment operator) */

// Untuk sekarang kita menggunakan let dalam mendeklarasi variable

let firstname = 'Rafael' //strings
let age = 14; //numbers
let student = true // ini yang kita sebut booleans yaitu data yang hanya terdapat 2 macam yaitu true = 1 & false = 0

// Ini adalah contoh pemakai variable dalam javascript
age = age + 1 //logika nya adalah umur kita = age dan age sendiri yaitu 14 dan ditambah +1 


console.log("hello", firstname)
console.log("you are ",age, " years old") //jadi saat kita mengconsole.log age, age tersebut akan bertambah 1
console.log("Enrolled:", student) 

//Ini adalah contoh advanced/kompleks penggunaan JavaScript & HTML
// Jadi document.getelementById().innerHTML adalah cara kita memanipulasi element pada HTML dan mengubahnya dari        javascript
document.getElementById("p1").innerHTML = "hello "+ firstname
document.getElementById("p2").innerHTML = "you are " + age + " years old"
document.getElementById("p3").innerHTML = "Enrolled: "+ student
