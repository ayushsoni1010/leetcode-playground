/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end){
        let middle = Math.floor(start + (end - start) / 2);
        if( target < nums[middle]){
            end = middle - 1;
        }else if(target > nums[middle]){
            start = middle + 1;
        }else{
            return middle;
        }
    }
    return -1;
};