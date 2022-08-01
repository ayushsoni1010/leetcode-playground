function majorityElement(nums: number[]): number {
    let num:number = undefined;
    let count:number = 0;
    
    for(let n of nums){
       if(count === 0) 
           num = n;
       count += (num === n) ? 1 : -1;
    }
    return num;
};