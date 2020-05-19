// Link: https://leetcode.com/problems/ransom-note/submissions/

var canConstruct = function(ransomNote, magazine) {
    var obj = {}
    
    for (i=0; i<magazine.length; i++) {
        
        if (obj[magazine[i]]) {
            obj[magazine[i]] += 1
        }
        else {
            obj[magazine[i]] = 1
        }
    }
    
    for (i=0; i<ransomNote.length; i++) {
        
        if (obj[ransomNote[i]]) {
            obj[ransomNote[i]] -= 1
        } 
        else {
            return false
        }
        
        if (obj[ransomNote[i]] < 0) {
            return false
        } 
    }
    return true
};