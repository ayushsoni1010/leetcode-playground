function isPowerOfFour(n: number): boolean {
    if(n === 0) return false;
    let num:number = Math.log(n) / Math.log(4);
    return num === Math.floor(num);
};