function totalDigitRekursif(angka) {
  if (angka !== undefined){

  var stringAngka = angka.toString();// 512

  if(stringAngka.length === 1){
    return angka;
  } else {
    var penampungAngka = Number(stringAngka[0]); // 5
    stringAngka = stringAngka.slice(1);// 512 -> 12
    return penampungAngka + totalDigitRekursif(Number(stringAngka));
  }
} else {
	return 'Input Kosong'
}
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
console.log(totalDigitRekursif());


// 5 1 2
//  5 6 8

// 1 5 4  2
//  1 6 10 12