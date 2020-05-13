// Link: https://leetcode.com/problems/spiral-matrix/submissions/


var spiralOrder = function(matrix) {
    var arrOfNums = []
    var index = 0

    if (matrix.length == 0) {
      return []
    }
    
    if (matrix[0].length == 1) {
      for (i=0; i<matrix.length; i++) {
          arrOfNums.push(matrix[i][0])
      }
        return arrOfNums
    }

    arrOfNums.push(...matrix.shift())

    while (matrix[0] && matrix[0].length != 0) {

      while (index != matrix.length - 1) {
        arrOfNums.push(matrix[index].pop())
        index += 1
      }

      arrOfNums.push(...matrix.pop().reverse())


    if (matrix.length == 0) {
        return arrOfNums
    }

      index -= 1

      while (index != 0) { 
        arrOfNums.push(matrix[index].shift())
        index -= 1
      }

      arrOfNums.push(...matrix.shift())
    }
    
  return arrOfNums
};