// Callback tuh kayak memanggil kembali fungsi dari function ke function lainnya
// misal hasil di function pertama 2, nah trus 2 ini pindahin ke function lainnya buat
// di masukkin ke dalam .innerHTML

x = 10
y = 20
z = 30
n = 40


let total = sum(x,y,z,n,DisplayDOM)
console.log (hasil)

function sum(x,y,z,n, results){
    hasil = x + y + z + n
    results(hasil) //sebenarnya results ini adalah DisplayDOM karena ketika kalian code diatas kalian sadar
    //bahwa x,y,z,n,(DisplayDOM)
}

function DisplayDOM(hasil){
    // Nah tadi kan hasilnya adalah lah perjumlahan dari x,y,z,n ini kita masukkan ke dalam fungsi DisplayDOM(hasil)
    // Fungsi dari function ini adalah memasukkan hasil dari penjumlahan "hasil" ke .innerHTML
    document.getElementById("mylabel").innerHTML = hasil
}