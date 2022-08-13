/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let set = new Set(nums);
    
    let ans;
    
    for(let i=0;i<nums.length;i++){
        if(!set.has(i)){
            ans = i;
        }
    }
    if(ans === undefined){
        ans = nums.length;
    }
    return ans;
};