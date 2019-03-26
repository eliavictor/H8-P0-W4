function meleeRangedGrouping (str) {
// var output = ''
// var arrMelee = []
// var arrRanged = []
// var penampungMelee = ''
// var penampungRanged = ''
// var penampung = ''

//   for (var i = 0; i < str.length; i++) {
//   	if (str[i] === '-') {
//   		if (str[i+1] === 'R') {
//   			penampungRanged += ' '		
//   		} else if (str[i+1] === 'M') {
//   			penampungMelee += ' '
//   		}
//   	} else {
//   		if (str[i+1] === 'R') {
//   			penampungRanged += str[i]		
//   		} else {
//   			penampungMelee += str[i]
//   		}
//   	}



  	// if (str[i] === '-' || str[i] === ',') {
  	// 	penampung += ' '
  	// } else {
  	// 	penampung += str[i]
  	// }
  }
  console.log(penampungMelee)
  console.log(penampungRanged)
  // return 
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

// console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

// console.log(meleeRangedGrouping('')); // []