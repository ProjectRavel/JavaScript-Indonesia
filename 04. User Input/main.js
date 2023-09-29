// Cara menggunakan User Input

// ada 2 cara yaitu Easy Way & Hardway

// Easyway adalah dengan cara menggunakan prompt
// Sebagai Contoh :

 let username = prompt("Whats your name?")
 console.log(username)

// Hardway adalah dengan cara menggunakan DOM (Data Orientation Manipulation) yaitu mengubah sesuatu pada HTML   //menggunakan Java script
// Sebagai Contoh :

// getelementbyId(Id yang terdapat pada element HTML) kita akan membahasnya lebih dalam pada pertemuan selanjutnya
 document.getElementById("mybutton").onclick = function(){
    username = document.getElementById ("mytext").value
    console.log (username)
    document.getElementById("mylabel").innerHTML = "Hello " + username;
 }