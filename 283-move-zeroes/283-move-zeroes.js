/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0;
    for(let i=0;count<nums.length;i++){
        if(!nums[i]){
            nums.splice(i,1);
            nums.push(0);
            i--;
        }
        count++;
    }
    return nums;
};