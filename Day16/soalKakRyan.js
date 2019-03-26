function test(angka) {
	var output = ''
	if (angka%3 === 0 && angka%4 === 0) {
			output = 'Denny Wijaya'
		} else if (angka%3 === 0) {
			output = 'Denny'
		} else if (angka%4 === 0) {
			output = 'Wijaya'
		}
	return output
}

console.log(test(12))
console.log(test(9))
console.log(test(16))
console.log(test(24))
