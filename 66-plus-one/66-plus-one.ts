function plusOne(digits: number[]): number[] {
    let arr = BigInt(digits.join(""));
    return (arr + 1n).toString().split('').map(e => parseInt(e));
};