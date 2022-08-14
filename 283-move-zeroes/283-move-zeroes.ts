/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let count:number = 0;
    for(let i:number = 0; count < nums.length;i++){
        if(!nums[i]){
            nums.splice(i,1);
            nums.push(0);
            i--;
        }
        count++;
    }
};