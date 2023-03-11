//TUGAS 1

const object_ku = {

    setObj: function (str1, str2, numb1, numb2, arrKu, isiArr) {
        object_ku.nama = str1,
            object_ku.asal = str2,
            object_ku.umur = numb1,
            object_ku.wa = numb2,
            object_ku[arrKu] = isiArr
    },
    tampilObj: function () {
        console.log(object_ku.nama)
        console.log(object_ku.asal)
        console.log(object_ku.umur)
        console.log(object_ku.wa)
        console.log(object_ku.aktivitas)
    }
}

object_ku.setObj("Alrico Rizki Wibowo", "Kota Semarang", 21, 085290328542, "aktivitas", "makan\n")
object_ku.tampilObj()

const objhitung = {
    hitungMtk: function (angka1, angka2) {
        tambah = angka1 + angka2
        kurang = angka1 - angka2
        kali = angka1 * angka2
        bagi = angka1 / angka2
        pangkat = angka1 ** angka2
        modulus = angka1 % angka2
        console.log(tambah + "\n" + kurang + "\n" + kali + "\n" + bagi + "\n" + pangkat + "\n" + modulus)
    }
}
objhitung.hitungMtk(100, 2)