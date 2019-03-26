function kaliTerusRekursif(angka) {
  var stringAngka = angka.toString();
  if (stringAngka.length === 1) {
  	return angka
  } else {
  	var penampungAngka = 1
  	for (var i = 0; i < stringAngka.length; i++) {
  		penampungAngka *= Number(stringAngka[i])
  	}
  	// var penampungAngka = Number(stringAngka[0])
  	// stringAngka = stringAngka.slice(1)
  	// return penampungAngka * kaliTerusRekursif(Number(stringAngka))
  	return kaliTerusRekursif(penampungAngka)
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6