/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    nums.map((ele)=>{
        if(Math.abs(ele).toString().length % 2 === 0){
            count++;
        }
    })
    return count;
};