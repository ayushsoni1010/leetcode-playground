/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n === 0) return false;
    while(true){
        if(n === 1) return true;
        if(n % 2 !== 0) return false;
        n = n / 2;
    }
};