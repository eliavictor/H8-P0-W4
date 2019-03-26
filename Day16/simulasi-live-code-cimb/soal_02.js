/*
==================
Number Processing
==================

[INSTRUCTION]
Terdapat function numberProcessing yang menerima sebuah parameter berupa array,
function akan mencari nilai min , max, dan rata -rata, serta mengelompokan angka ganjil dan genap , lalu menggabungkannya menjadi string

[EXAMPLE]
input: [1, 3, 5, 1, 2, 8, 10, 0, 3]
output: "Min: 0, Max: 10, Avg: 3, Odds: 1-3-5-1-3, Evens: 2-8-10-0"


[RULES]
- Wajib menggunakan Pseudocode
- Tidak boleh menggunakan Function bawaan Math apapun.
- Jika mean dalam bentuk desimal, bulatkan kebawah.

*/

function numberProcessing(numberArr) {
	var avg = 0
	var even = ''
	var odd = ''
	var sum = 0
	for (var i = 0; i < numberArr.length; i++) {
    for (var j = 1; j < numberArr.length-i; j++) {
        if (numberArr[j - 1] > numberArr[j]) {
            var temp = numberArr[j - 1];
            numberArr[j - 1] = numberArr[j];
            numberArr[j] = temp;
        }
    }
    if (numberArr[i]%2 === 0) {
    	even += numberArr[i] + '-'
    } else {
    	odd += numberArr[i] + '-'
    }
    sum += numberArr[i]
  }
  avg = sum / numberArr.length
  if(avg%1 != 0){
  	avg = avg - (avg%1)
  }
  var strMin = String(numberArr[0])
  var strMax = String(numberArr[numberArr.length-1])
  var strAvg = String(avg)

  console.log('Min: '+ strMin +', '+'Max: '+strMax+', '+'Avg: '+ strAvg +', '+'Odds: '+ odd+', '+'Evens: '+ even)
      return numberArr
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
// "Min: 0, Max: 10, Avg: 3, Odds: 1-3-5-1-3, Evens: 2-8-10-0"
