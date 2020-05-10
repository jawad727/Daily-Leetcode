// Link: https://leetcode.com/problems/contains-duplicate/submissions/

var containsDuplicate = function(nums) {
    var obj = {}
    var sorted = nums.sort()
    
    for (i=0; i<nums.length; i++) {
        
        if (sorted[i] == sorted[i + 1]) {
            return true
        }
            
    }
    
    return false
};


var containsDuplicate = function(nums) {
    var obj = {}
    
    for (i=0; i<nums.length; i++) {
        
        if (obj[nums[i]] == nums[i]) {
            return true
        }
            
        obj[nums[i]] = nums[i]
    }
    
    return false
};