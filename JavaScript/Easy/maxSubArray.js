// Link: https://leetcode.com/problems/maximum-subarray/submissions/

var maxSubArray = function(nums) {
    var maxNum = nums[0]
    var maxSoFar = nums[0]

    for (i=1; i<nums.length; i++) {
        if (nums[i] + maxSoFar > nums[i]) {
            maxSoFar = nums[i] + maxSoFar
        } 
        else {
            maxSoFar = nums[i]
        }
        
        if (maxSoFar > maxNum) {
            maxNum = maxSoFar
        }
    }
    
    return maxNum
    
};
