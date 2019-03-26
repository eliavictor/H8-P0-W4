/*
==================================
Array Mastery: Shortest Word
==================================

[INSTRUCTION]
Disediakan sebuah kalimat. Function shortestWords akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan jumlah huruf paling sedikit dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan jumlah kata yang paling sedikit tersebut.

[EXAMPLE]
input (kalimat): Do you want to become a great coder.
panjang kata paling sedikit dalam kalimat: 1
output: ['a']

input (kalimat): You dont know what you have until you lose it!.
panjang kata paling sedikit dalam kalimat: 3
output: ['you', 'it!']

[RULES]
Dilarang menggunakan function .map/.filter/.reduce!
Dilarang menggunakan regex!n array result
Dilarang menggunakan fungsi string seperti split, substring, slice
*/



function shortestWords(words) {
	var output = []
	var aaa = []
  	for (var i = 0; i < words.length; i++) {
  		var counter = ''
  		if (words[i]!== ' ') {
  			counter += words[i]
  		} else {
  			output.push(counter)
		}
  // 		var counter = 0
  // 		if (words[i] === ' ') {
  // 			counter = i
  // 			output.push(counter)
		// }
  	}
  	// aaa.push(output[0])
  	// for (var i = 0; i < output.length-1; i++) {
  	// 	aaa.push((output[i+1]-output[i])-1)
  	// }
   return output
}

console.log(shortestWords('Do you want to become a great coder ?')); // ['a', '?']
console.log(shortestWords('You dont know what you have until you lose it!')); // ['you', 'it!']
console.log(shortestWords('I am diligent')); // ['I']

