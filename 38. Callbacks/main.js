

// callback = sebuah fungsi diteruskan sebagai dan argumen
// ke fungsi lain

// Memastikan bahwa suatu fungsi tidak berjalan
// untuk dijalankan sebelum tugas selesai.
// membantu kita mengembangkan kode asinkron.
// (Ketika suatu fungsi harus menunggu fungsi lainnya)
// yang membantu kita menghindari kesalahan dan potensi masalah
//  Mantan. Tunggu hingga file dimuat (yagitu dah ribet emang semangat ya!)


a = 999
b = 999

Sum(a,b, displayDOM)

function Sum(x,y, callback){
    let result = x + y
    callback(result)
}

function displayDOM(output){
    document.getElementById("mylabel").innerHTML = output
}