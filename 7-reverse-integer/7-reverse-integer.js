/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let remainder = parseFloat(x.toString().split("").reverse().join(""));
    return (remainder >= 2147483647 || remainder <= -2147483648) ? 0 : remainder * Math.sign(x);
};