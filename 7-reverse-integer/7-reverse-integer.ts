function reverse(x: number): number {
    let remainder:number = parseFloat(x.toString().split("").reverse().join(""));
    return (remainder >= 2147483647 || remainder <= -2147483647) ? 0 : remainder * Math.sign(x);
};