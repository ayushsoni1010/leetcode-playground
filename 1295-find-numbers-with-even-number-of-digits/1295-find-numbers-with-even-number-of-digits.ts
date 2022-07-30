function findNumbers(nums: number[]): number {
    let count:number = 0;
    nums.map(ele => {
        if(Math.abs(ele).toString().length % 2 === 0){
            count++;
        }
    })
    return count;
};