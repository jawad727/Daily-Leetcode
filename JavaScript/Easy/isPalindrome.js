// Link: https://leetcode.com/problems/palindrome-number/submissions/

var isPalindrome = function(x) {
    var num = x.toString().split("").reverse().join("")

    return x.toString() == num ? true : false
};