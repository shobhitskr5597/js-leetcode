var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length === 0) return median_of_arr(nums2)
    else if (nums2.length === 0) return median_of_arr(nums1)
    else return median_of_arr([...nums1,...nums2])
};

function median_of_arr(arr) { 
    const middle = (arr.length + 1) / 2; 
    
    // Avoid mutating when sorting 
    const sorted = [...arr].sort((a, b) => a - b); 
    const isEven = sorted.length % 2 === 0; 
    
    return isEven ?
    (sorted[middle - 1.5] + sorted[middle - 0.5]) / 2 : sorted[middle - 1]; 
}

const num1 = [1,3], num2 = [2];
console.log(findMedianSortedArrays(num1,num2));