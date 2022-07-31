/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let temp = x;
    let sum = 0;
    if(Math.sign(x) === -1){
        return false;
    }
    while(x != 0){
        let rem = x % 10;
        sum = sum * 10 + rem;
        x = Math.floor(x / 10);
    }
    return temp === sum;
};