var findMedianSortedArrays = function(nums1, nums2) {
    var arr = []
    var combinedLength = nums1.length + nums2.length
    var indexNumber = Math.floor(combinedLength / 2)
    
    for (i=0; i<combinedLength; i++) {

        if (nums1[0] <= nums2[0] || nums2.length == 0) {
            arr.push(nums1.shift())
        }
        else if (nums2[0] < nums1[0] || nums1.length == 0) {
            arr.push(nums2.shift())
        }
    }
    console.log(arr, indexNumber)
    
     for (i=0; i<arr.length; i++) {
         if ( arr.length % 2 == 0 && indexNumber === i ) {
             return (arr[i] + arr[i - 1]) / 2
         }
         else if (arr.length % 2 != 0 && indexNumber === i ) {
             return (arr[i])
         }
     }
};

// less space solution V V V

var findMedianSortedArrays = function(nums1, nums2) {
    var arr = []
    var combinedLength = nums1.length + nums2.length
    var indexNumber = Math.floor(combinedLength / 2)
    
    for (i=0; i<combinedLength; i++) {

        if (nums1[0] <= nums2[0] || nums2.length == 0) {
            arr.push(nums1.shift())

            if (indexNumber + 1 == arr.length) {
              if (combinedLength % 2 == 0) {
                return (arr[arr.length - 2] + arr[arr.length - 1]) / 2
              }
              else {
                return arr[arr.length - 1]
              }
            }

        }
        else if (nums2[0] < nums1[0] || nums1.length == 0) {
            arr.push(nums2.shift())

            if (indexNumber + 1 == arr.length) {
              if (combinedLength % 2 == 0) {
                return (arr[arr.length - 1] + arr[arr.length - 2]) / 2
              }
              else {
                return arr[arr.length - 1]
              }
            }
        }
    }
};