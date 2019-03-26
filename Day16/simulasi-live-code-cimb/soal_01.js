/*
============
Grocery Shop 
============

[INSTRUCTION]
Mari kita berbelanja!! 
Miku berbelanja di pasar untuk membeli kebutuhan Bulanan. 
Di pasar dijual beberapa jenis kebutuhan sebagai berikut : 
1. Beras, 1 liter seharga Rp. 10.000 
2. Ayam, 1 Potong seharga Rp. 8.000
3. Sayur, 1 ikat seharga Rp. 5000

Uang Miku terbatas, namun uang belanjaannya harus dapat membeli mulai dari barang termahal (beras) hingga termurah (sayur).
Jika uangnya masih cukup, maka Miku akan membeli barang tersebut lagi dari yang termahal hingga termurah lagi hingga uang Miku tidak lagi cukup untuk membeli.

tugas kalian adalah memunculkan detail transaksi yang dilakukan Miku dan memunculkan kembaliannya.
note: selalu lakukan pembelian dari barang termahal -> termurah

[EXAMPLE]
uang Miku Rp. 107.400 maka jumlah belanjaan Miku yang paling maksimal adalah:
"beras 5 liter, ayam 4 potong, sayur 5 ikat, kembalian Rp. 400"
kenapa? karena saat uang Miku tersisa: 15400, Miku hanya sanggup membeli beras dan sayur dengan kembalian Rp. 4400



Tulis Pseudocode di sini!
Start
Create variable uangMiku equals to 107400
Create variable beras equals to 0, ayam equals to 0, sayur equals to 0
For uangMiku greater equals than 23000, uangMiku minus 23000 {
Do beras plus 1, ayam plus 1, sayur plus 1
}
If uangMiku greater equals than 10000{ beras plus 1}
If uangMiku greater equals than 8000 { ayam plus 1}
If uangMiku greater equals than 5000 { sayur plus 1}
Print beras, ayam, sayur
End
 */

var uangMiku = 107400
var uangAwal = uangMiku
var beras = 0
var ayam = 0
var sayur = 0

for (uangMiku; uangMiku >=  23000; uangMiku = uangMiku - 23000) {
	beras += 1;
	ayam += 1;
	sayur += 1;
}

if (uangMiku >= 10000) {
	beras += 1
	uangMiku = uangMiku - 10000
} 
if (uangMiku >= 8000){
	ayam += 1
	uangMiku = uangMiku - 8000
}
if (uangMiku >= 5000){
	sayur += 1
	uangMiku = uangMiku - 5000
}

console.log('Uang Miku Awal = '+ uangAwal)
console.log('Beras = '+ beras + ' liter')
console.log('Ayam = '+ ayam + ' potong')
console.log('Sayur = '+ sayur + ' ikat')