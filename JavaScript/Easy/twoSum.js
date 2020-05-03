// Link: https://leetcode.com/problems/two-sum/submissions/

var twoSum = function(nums, target) {
	let obj = {}
    for(let i = 0; i < nums.length; i++) {
        if (target - nums[i] in obj) {
            return [obj[target-nums[i]], i]
        }
        obj[nums[i]] = i
    }
    
};