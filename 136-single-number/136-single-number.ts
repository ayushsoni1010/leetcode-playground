function singleNumber(nums: number[]): number {
    let result:number = nums[0];
    for(let i:number = 1; i<nums.length; i++){
        result = result ^ nums[i];
    }
    return result;
};