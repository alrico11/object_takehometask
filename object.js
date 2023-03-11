//TUGAS 1
let nama,
    asal,
    umur,
    wa,
    aktivitas = []
const object_ku = {
    nama, // aslinya gausah di define bisa, biar masuk kriteria aja ya mas :<
    asal,
    umur,
    wa,
    aktivitas,
    setObj: function (str1, str2, numb1, numb2, isiArr) {
        object_ku.nama = str1, // Create property string
            object_ku.asal = str2, // Create property string
            object_ku.umur = numb1, // Create property integer
            object_ku.wa = numb2, // Create property Integer
            object_ku["aktivitas"] = isiArr // Create property array
        console.log(object_ku.nama + "\n" + object_ku.asal + "\n" + object_ku.umur + "\n" + object_ku.wa + "\n" + object_ku.aktivitas) //log obejct
    }
}
object_ku.setObj("Alrico Rizki Wibowo", "Kota Semarang", 21, 085290328542, ["makan", "belajar", "tidur"]) //call object function

const objhitung = {
    hitungMtk: function (angka1, angka2) { // define a function
        tambah = angka1 + angka2
        kurang = angka1 - angka2
        kali = angka1 * angka2
        bagi = angka1 / angka2
        pangkat = angka1 ** angka2
        modulus = angka1 % angka2
        console.log("\n" + tambah + "\n" + kurang + "\n" + kali + "\n" + bagi + "\n" + pangkat + "\n" + modulus)
    }
}
objhitung.hitungMtk(100, 2)