/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    n = n.toString(2);
    return [...n].reduce((total,item)=> total = item === '1' ? total + 1 : total,0);
};