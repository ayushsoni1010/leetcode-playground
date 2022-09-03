function hammingWeight(n: number): number {
    let x:string = n.toString(2);
    return [...x].reduce((total,item) => total = item === '1' ? total + 1 : total, 0);
};