// Link: https://leetcode.com/problems/3sum/submissions/

var threeSum = function(nums) {
    var arr = []
    var obj = {}
    nums = nums.sort()
    
    for (i=1; i<nums.length; i++) {
        
        obj[nums[i - 1]] = nums[i - 1]
        
        for (j=i+1; j<nums.length; j++) {
          var pushArr = [obj[ 0 - (nums[i] + nums[j]) ], nums[i], nums[j]]
            
            if ( 0 - (nums[i] + nums[j]) in obj ) {
   
                    arr.push( pushArr )      
            }  
        }
    }
    
    return arr.filter(( t={}, a=> !(t[a]=a in t)))  
};