function search(nums: number[], target: number): number {
    let start:number = 0;
    let end:number = nums.length - 1;
    
    while(start <= end){
        let middle:number = Math.floor(start + (end - start) / 2 );
        if(target > nums[middle]){
            start = middle + 1;
        }else if(target < nums[middle]){
            end = middle - 1;
        }else{
            return middle;
        }
    }
    return -1;
};