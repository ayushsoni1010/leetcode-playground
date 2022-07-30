function searchRange(nums: number[], target: number): number[] {
    const answer:number[] = [-1,-1];
    answer[0] = searchPosition(nums, target, true);
    if(answer[0] !== -1){
        answer[1] = searchPosition(nums,target, false);
    }
    return answer;
};

const searchPosition = (nums:number[],target:number,isFirstIndex:boolean):number => {
    let [answer,start] = [-1,0];
    let end:number = nums.length - 1;
    
    while(start <= end){
        let middle:number = Math.floor(start + (end - start) / 2);
        if(target < nums[middle]){
            end = middle - 1;
        }else if(target > nums[middle]){
            start = middle + 1;
        }else{
            answer = middle;
            if(isFirstIndex){
                end = middle - 1;
            }else{
                start = middle + 1;
            }
        }
    }
    return answer;
}