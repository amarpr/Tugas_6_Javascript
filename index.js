// Menampilkan perulangan sebanya 20 kali
var awal = 1;
var akhir = 20;

while (awal <= 20) {
    console.log("ini perulangan ke " + awal)
    awal++;
}

console.log("======================")

// Menampilkan bilangan ganjil genap
var awal = 1;
var akhir = 20;
while (awal <= akhir) {
    if (awal % 2 == 0) {
        console.log("ini adalah bilangan genap")
    } else {
        console.log(awal)
    }
    awal++
}