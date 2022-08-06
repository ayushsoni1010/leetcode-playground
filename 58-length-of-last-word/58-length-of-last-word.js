/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let str = s.trim().split(" ");
    return str[str.length -1].length;
};