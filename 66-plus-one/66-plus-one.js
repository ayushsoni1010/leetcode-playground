/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let arr = BigInt(digits.join(""));
    return (arr + 1n).toString().split("");
};