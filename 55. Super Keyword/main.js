// Super Keyword : adalah untuk membuat fungsi dari constructor(a,b,c) 
//                 berfungsi ke children nya

// Parent
class Sekolah{
  constructor(nama,umur){
    this.nama = nama
    this.umur = umur
  }
}


// Children
class SekolahDasar extends Sekolah{
    constructor(nama, umur, iq){
        super(nama, umur)
        this.iq = iq
    }
}

class SekolahMenengahPertama extends Sekolah{
    constructor(nama,umur,iq){
        super(nama,umur)
        this.iq = iq
    }
}

class SekolahMenengahKejuruan extends Sekolah{
    constructor(nama,umur,iq){
        super(nama,umur)
        this.iq = iq
    }
}

const SD = new SekolahDasar("Ucup Marucup",9,190)
const SMP = new SekolahMenengahPertama("Ghifa",14,999)
const SMK = new SekolahMenengahKejuruan("RavelSki", 15, "Berapa aja boleh")

console.log (`${SD.nama} adalah seorang pelajar yang berumur ${SD.umur} tahun, Dengan IQ sekisar ${SD.iq}`)
console.log (`${SMP.nama} adalah seorang pelajar yang berumur ${SMP.umur} tahun, Dengan IQ sekisar ${SMP.iq}`)
console.log (`${SMK.nama} adalah seorang pelajar yang berumur ${SMK.umur} tahun, Dengan IQ sekisar ${   SMK.iq}`)