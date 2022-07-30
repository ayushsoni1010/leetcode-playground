/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if(dividend === -Math.pow(2,31) && divisor === -1) return Math.pow(2,31) - 1;
    if(dividend === divisor) return 1;
    if(divisor === 1) return dividend;
    return Math.trunc(dividend/divisor);
};