/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    let start = 0;
    let end = 0;

    for (let i = 0; i < nums.length; i++) {
        start = Math.max(start, nums[i]);
        end += nums[i];
    }
//      binary search
    while(start < end){
        let middle = Math.floor(start + (end - start) / 2);

        let sum = 0;
        let pieces = 1;
        for(let num of nums){
            if(sum + num > middle){
                sum = num;
                pieces++;
            }
            else{
                sum += num;
            }
        }

        if(pieces > m){
            start = middle + 1;
        }
        else{
            end = middle;
        }
    }
    return start;
};   
