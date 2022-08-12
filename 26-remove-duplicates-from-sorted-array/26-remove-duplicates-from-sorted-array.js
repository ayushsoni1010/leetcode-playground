/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i =0;j=1;
    while(j < nums.length){
        if(nums[i] === nums[j]){
            j++;
        }else{
            nums[i+1] = nums[j];
            i++
        }
    }
    return i+1;
};