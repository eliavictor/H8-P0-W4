/*
    ================
    matrix Transpose
    ================

    [INSTRUCTION]
    buatlah sebuah program yang dapat men transpose Matriks. yaitu merubah 
    row pada matriks menjadi column di matriks yang baru.  

    [EXAMPLE]
    input: 
    [
        [1,2,3]
    ]
    berubah jadi : 
    [
        [1],
        [2],
        [3]
    ]

    input:
    [
        [1,2,3],
        [4,5,6]
    ]
    berubah menjadi :  
    [
        [1,4],
        [2,5],
        [3,6]
    ]

    input: 
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
    berubah menjadi : 
    [
        [1,4,7],
        [2,5,8],
        [3,6,9]
    ]

*/

function matrixTranspos(arr) {
  var output = []
  var output2 = []

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
    output2.push(arr[i][j])
    }
    output.push(output2)
  }
  return output2
}

console.log(matrixTranspos(
  [
      [1,2,3]
  ]
))
/*
  [
      [1],
      [2],
      [3]
  ]
*/

console.log(matrixTranspos(
  [
      [1,2,3],
      [4,5,6]
  ]
))
/*
  [
      [1,4],
      [2,5],
      [3,6]
  ]
*/

console.log(matrixTranspos(
  [
      [1,2,3],
      [4,5,6],
      [7,8,9]
  ]
))
/*
  [
      [1,4,7],
      [2,5,8],
      [3,6,9]
  ]
*/