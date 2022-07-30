function divide(dividend: number, divisor: number): number {
    if (dividend === -Math.pow(2, 31) && divisor === -1) return Math.pow(2, 31) - 1;
    if (divisor === 1) return dividend;
    if (dividend === divisor) return 1;
    return Math.trunc(dividend/divisor);
};