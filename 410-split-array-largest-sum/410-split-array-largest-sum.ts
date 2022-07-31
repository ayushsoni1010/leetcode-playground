function splitArray(nums: number[], m: number): number {
    let start:number = 0;
    let end:number = 0;

    for (let i:number = 0; i < nums.length; i++) {
        start = Math.max(start, nums[i]);
        end += nums[i];
    }
//      binary search
    while(start < end){
        let middle:number = Math.floor(start + (end - start) / 2);

        let sum:number = 0;
        let pieces:number = 1;
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