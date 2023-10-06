class student{
    constructor(nama,kelas,IQ){
        this.nama = nama
        this.kelas = kelas
        this.IQ = IQ
    }
    belajar(){
        console.log(`Murid atas nama ${this.nama} sedang belajar`)
    }
}

const student1 = new student("Ravel", "XRPL1", 0)
const student2 = new student("Pelski", "XTKJ2", 999)
const student3 = new student("Sans", "XMM", 666)
const student4 = new student("Alberto","Apaaja",1010110)

const students = [student1,student2,student3,student4]

ViewBelajar(students)

function ViewBelajar(belajar){
    for(const murid of belajar){
        murid.belajar()
    }
}
