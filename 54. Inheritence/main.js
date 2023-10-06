// inheritence = Inheritence adalah suatu pewarisan yang memiliki parent dan children
//               yang berfungsi sebagai pengwaris dari element,function dari parent (Semoga ngerti)


// Parent
class Sekolah{
    active = true
    study(){
        console.log(`Murid Murid ${this.name} sedang belajar`)
    }
    
    praktek(){
        console.log (`Murid Murid ${this.name} sedang melakukan praktek`)
    }
}


// Children
class SekolahDasar extends Sekolah{

    name = "Kelas 6B"

    bermain(){
        console.log (`Murid murid ${this.name} sedang bermain`)
    }

}

class SekolahMenengahPertama extends Sekolah{
    
    name = "Kelas 9B"

    kerjakelompok(){
        console.log (`Murid murid ${this.name} sedang kerja kelompok`)
    }

}

class SekolahMenengahKejuruan extends Sekolah{
      
    name = "Kelas XRPL1"

    PKL(){
        console.log (`Murid murid ${this.name} sedang melakukan PKL`)
    }

}

const SD = new SekolahDasar()
const SMP = new SekolahMenengahPertama()
const SMK = new SekolahMenengahKejuruan()

// SD
SD.study()
SD.praktek()
SD.bermain()

// SMP
SMP.study()
SMP.praktek()
SMP.kerjakelompok()

// SMK
SMK.study()
SMK.praktek()
SMK.PKL()
