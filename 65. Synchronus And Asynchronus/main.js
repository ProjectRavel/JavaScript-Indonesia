//synchronous = Synchronous code adalah kode yang dieksekusi secara berurutan, 
//              langkah demi langkah, mulai dari atas ke bawah. 
//              Setiap tugas harus menunggu tugas sebelumnya selesai sebelum melanjutkan

//Asynchronous = Asynchronous code adalah kode yang tidak menunggu tugas sebelumnya selesai 
//               untuk melanjutkan ke langkah berikutnya. 
//               Hal ini memungkinkan kode untuk melakukan tugas lain sambil menunggu operasi tertentu selesai.

const test = "Test"
console.log("Start")
setTimeout(() => console.log("This is Asynchronous"),4000)
console.log("End")