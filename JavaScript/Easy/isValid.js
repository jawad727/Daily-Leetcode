// Link: https://leetcode.com/problems/valid-parentheses/submissions/

var isValid = function(s) {
    var parenthObj = { "{": "}", "[": "]", "(": ")" }
    var parenthArr = ["{", "(", "["]
    var stack = []
    
    for (i=0; i<s.length; i++) {
        if ( parenthArr.includes(s[i]) ) {
            stack.push(s[i])
        } 
        else if (parenthObj[stack[stack.length - 1]] == s[i]) {
            stack.pop()
        } else {
            return false
        }
    }
    return stack.length == 0 ? true : false
};