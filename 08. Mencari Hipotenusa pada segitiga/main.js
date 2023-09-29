//Pythagoras adalah Rumus mencari garis miring pada segitiga
// dan juga kita akan menghitung 
// cara mencari Pythagoras adalah dengan memakai rumus a^2 * b^2 = c^2 yang bisa kita sederhanakan menjadi  √a^2 * b^2 yang bisa kita lakukan didalam JavaScript dan kali ini kita menggunakan EasyWay dengan cara Prompt dan HardWay dengan cara DOM (Data Orientation Manipulation)


// EASY WAY

// Kita akan mendeklarasi variable terlebih dahulu
let a
let b
let c
//-------------------\\

// EASYWAY

// Dan Langsung saja kita mengesekusi dengan memakai fitur javascript yaitu prompt()
a = prompt ("Enter Side a")
// dan ingat! pada prompt() mau kita menulisnya angka ataupun huruf, prompt otomotis membaca tipe nya adalah string maka dari itu kita harus mengubahnya ke tipe number dengan cara :
a = Number(a)

b = prompt ("Enter Side B")
// dan ingat! pada prompt() mau kita menulisnya angka ataupun huruf, prompt otomotis membaca tipe nya adalah string maka dari itu kita harus mengubahnya ke tipe number dengan cara :
b = Number(b)

c = Math.pow(a , 2) + Math.pow (b , 2)
c = Math.sqrt (c)

alert (c)

documentid = document.getElementById

// HARD WAAY

// Ini adalah contoh dari penggunaan DOM yaitu menggunakan document.getelementById() yang maksudnya adalah kita akan menambahkan fungsi atau fitur pada tombol,ketikan,input pada HTML dengan mencari Id yang terdapat pada HTML pada kasus ini kita akan menambahkan sesuatu fitur ketikan kita click pada button di HTML

document.getElementById("submitbutton").onclick = function(){
    //dari yang kita lihat disitu terdapat.onclick dan juga function(){}, .onclick sendiri adalah ketika button itu di click atau pada saat di click, dan function(){} adalah fungsi atau fitur, teruntuk function akan dijabarkan lebih detail pada pertemuan berikutnya

     // a = element html yang ber Id "inpA"
    a = document.getElementById("inpA").value //.value sendiri adalah Isi dari Inputan si Id "inpA" misalnya pada HTML kita isi 8 maka .value nya adalah 8
    a = Number(a) //Dan 8 ini kita akan ubah menjadi tipe data number karena kalau tidak 8 ini akan dibaca string dan tidak bisa dioperasikan dalam matematika

    // b = element html yang ber id "inpB"
    b = document.getElementById("inpB").value//.value sendiri adalah Isi dari Inputan si Id "inpb" misalnya pada HTML kita isi 4 maka .value nya adalah 4

    b = Number(b)//Dan 4 ini kita akan ubah menjadi tipe data number karena kalau tidak 4 ini akan dibaca string dan tidak bisa dioperasikan dalam matematika

    // Jadi kita sudah tau a = 8 dan b = 4 maka saat button yang ber id "submitbutton" di click maka si javascript ini akan membuat perhitungan ini:


    c = Math.pow(a , 2) + Math.pow (b , 2)
    c = Math.sqrt(c)
    //yang berarti a^2 x b^2 =  √c 
    
    // dan ketika semuanya sudah diesekusi maka kita akan melihat hasilnya dengan cara memakai DOM lagi, kita bisa memakai .innerHTML untuk menambahkan paragraph pada label Id Pada HTML, pada kasus ini kita menambahkan variable C jadi kesimpulannya kita menambahkan hasil pythagoras segitiga ke Label ber Id "resultc"
    document.getElementById("resultc").innerHTML = "C =  " + c

}       





