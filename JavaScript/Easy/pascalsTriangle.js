// Link: https://leetcode.com/problems/pascals-triangle/submissions/

var generate = function(numRows) {
    var startingArr = [[1]]
    var arrNum = 0
    
    if (numRows == 0) {
        return []
    }
    
    for (i=1; i<numRows; i++) {
        startingArr.push([])

        for (elemNum=0; elemNum <= startingArr[i-1].length; elemNum++) {
            
            if (elemNum != 0 && elemNum != startingArr[i-1].length) {
                startingArr[i].push(startingArr[i - 1][elemNum] + startingArr[i - 1][elemNum - 1])
            }
            else {
                startingArr[i].push(1)
            }
            

        }
        arrNum += 1
    }
    return startingArr
};