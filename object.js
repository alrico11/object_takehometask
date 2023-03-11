//TUGAS 1

const object_ku = {
    nama : "Alrico Rizki",
    asal : "Semarang",
    wa : 085290328542,
    aktivitas : ["tidur","makan","belajar"],
    tampilObj : function () { 
        console.log(object_ku.nama)
        console.log(object_ku.asal)
        console.log(object_ku.wa)
        console.log(object_ku.aktivitas)
    }
}

object_ku.tampilObj()

const objhitung = {
    hitungMtk : function (angka1,angka2){
        tambah = angka1 + angka2
        kurang = angka1 - angka2
        kali = angka1 * angka2
        bagi = angka1 / angka2
        pangkat = angka1**angka2
        modulus = angka1%angka2
        console.log(tambah+"\n"+kurang+"\n"+kali+"\n"+bagi+"\n"+pangkat+"\n"+modulus)
    }
}
objhitung.hitungMtk(100,2)