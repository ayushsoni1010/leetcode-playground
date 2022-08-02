/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let num = 0;
    let count = 0;
    
    for(let n of nums){
        if(count === 0) num = n;
        count += (num === n) ? 1 : -1;
    }
    return num;
};