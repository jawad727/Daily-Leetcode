// Link: https://leetcode.com/problems/is-subsequence/submissions/

var isSubsequence = function(s, t) {
    var num = 0
    
    for (i=0; i<t.length; i++) {
        if (t[i] == s[num]) {
            num += 1
        }
    }

    return s.length == num ? true : false
};