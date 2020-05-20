

var removeDuplicates = function(nums) {
    var obj = {}
    for (i=nums.length; i>=0; i--) {
        if (obj[nums[i]] == nums[i]) {  
            nums.splice(i, 1)
        }
        else {

            obj[nums[i]] = nums[i]
        }
    }

    return nums.length
};