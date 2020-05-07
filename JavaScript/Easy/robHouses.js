// Link: https://leetcode.com/problems/house-robber/submissions/

var rob = function(nums) {
    var even_sum = 0
    var odd_sum = 0
      
      for (i=0; i<nums.length; i++) {
  
        if (i % 2 == 0) {
          even_sum = Math.max(even_sum + nums[i], odd_sum)
        }
        else {
          odd_sum = Math.max(odd_sum + nums[i], even_sum)
        }
      }
  
    return even_sum > odd_sum ? even_sum : odd_sum
  };