// Link: https://leetcode.com/problems/length-of-last-word/submissions/

var lengthOfLastWord = function(s) {

    arr = s.split(" ")
    arr = arr.filter(item => {
      return item != ""
    })
  
    if (arr.length == 0) {
        
        return 0
    }
  
    console.log(arr)
    return arr[arr.length - 1].length
      
  };