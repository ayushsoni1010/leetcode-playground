function removeDuplicates(nums: number[]): number {
    let i:number = 0;
    let j:number = 1;
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