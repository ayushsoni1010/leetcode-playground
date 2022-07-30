function addBinary(a: string, b: string): string {
    const aBin:string = `0b${a}`;
    const bBin:string = `0b${b}`;
    const sum = BigInt(aBin) + BigInt(bBin);
    return sum.toString(2);
};