function containsDuplicate(nums: number[]): boolean {
    let arr:number[] = nums.filter((item,index)=> nums.indexOf(item) !== index);
    return arr.length !== 0 ? true : false;
};