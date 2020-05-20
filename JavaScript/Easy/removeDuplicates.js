// Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/

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

// Better Solution V V V

var removeDuplicates = function(nums) {
    let i = 0;
    let j = 1;
  
    for (; j<nums.length; j++) {
      if (nums[j] !== nums[i]) {
        i += 1;
        nums[i] = nums[j];
      }
    }
  
    return i + 1;
  };