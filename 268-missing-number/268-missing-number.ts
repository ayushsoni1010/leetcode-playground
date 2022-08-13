function missingNumber(nums: number[]): number {
    let set = new Set<number>(nums);
    
    let ans:number;
    
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