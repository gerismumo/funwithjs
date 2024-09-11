var findMedianSortedArrays = function(nums1, nums2) {
    const nums = [...nums1 ,...nums2].sort((a, b) => a -b);
    const length = nums.length;
    
    if(length % 2 == 0) {
        return (nums[length/2 - 1] + nums[length/2]) / 2;
    }else {
        return nums[Math.floor(length/2)];
    }
};

const result = findMedianSortedArrays([1,2,3,4,5], [6,7,8,9,10,11,12,13,14,15,16,17])

console.log("Result:", result)