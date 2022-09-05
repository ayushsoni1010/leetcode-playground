/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let answer = 0;
    
    for(let i=0;i<32;i++){
        answer = answer * 2 + n % 2;
        n = n >>> 1;
    }
    return answer;
};