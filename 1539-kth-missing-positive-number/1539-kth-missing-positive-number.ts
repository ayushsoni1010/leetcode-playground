function findKthPositive(arr: number[], k: number): number {
    let i:number = 1;
    const res:number[] = [];
    while(res.length <= k){
        if(!arr.includes(i)){
            res.push(i);
        }
        i++;
    }
    return res[k-1];
};