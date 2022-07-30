/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    while(start < end){
        let middle = Math.floor(start + (end - start) / 2);
        if(nums[middle] > nums[middle + 1]){
            end = middle;
        }
        else{
            start = middle + 1;
        }
    }
    return start;
};