// .foreach adalah value index dari array misal jika kalian dibawah foreach dari students adalah students[0] = spongebob
// students [1] = patrick dst.. dan ketika foreach() kita masukkan function akan membuat index dari 1 per 1 array
// akan mendapatkan masing masing fungsi dari function yang kita tuju

let students = ["spongebob", "patrick", "squidward"] //mari kita buat array dengan deklarasi students



function capatilize(element, index, array){
    //jangan lupa untuk () kita dari belakang ke depan jangan sampai array,index,element. namun element,index,array

    array[index] = element[0].toUpperCase() + element.substring(1) //maksud dari baris code ini adalah students[index]
    // akan kita buat awalnya capslock sisanya lowerCase, ya kayak gtu dah
}
students.forEach(capatilize) //nah disini kita masukin students nya ke foreach dengan memakai function capatilize

// trus kita console.log semua value di dalam array menggunakan fitur function ini yang berarti 1 per 1 value index
// dalam array akan kita console.log memakai foreach
students.forEach(print)
function print(element){
    console.log (element)
}


