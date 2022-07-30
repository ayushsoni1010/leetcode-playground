/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    nums.sort((a:number,b:number)=> a - b);
};