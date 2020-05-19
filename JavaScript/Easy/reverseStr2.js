// Link: https://leetcode.com/problems/reverse-string-ii/submissions/

var reverseStr = function(s, k) {
    var num = 1
    var string = ""
    
    for (i=0; i<s.length; i+=k) {
      if (num % 2 == 0) {
        string += s.slice(i, i+k)
      } 
      else {
        string += s.slice(i, i+k).split("").reverse().join("")
      }

        num += 1
    }
    
    return string
};