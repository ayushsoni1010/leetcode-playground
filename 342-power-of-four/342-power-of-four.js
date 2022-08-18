/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n === 0) return false;
    let num = Math.log(n) / Math.log(4);
    return num === Math.floor(num);
};