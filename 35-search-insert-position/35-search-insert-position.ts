function searchInsert(nums: number[], target: number): number {
    nums.push(target);
    nums.sort((a,b)=>a-b);
    return nums.indexOf(target);
};