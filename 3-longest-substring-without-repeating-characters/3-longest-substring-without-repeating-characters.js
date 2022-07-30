/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let first_pointer = 0;
    let second_pointer = 0;
    let max = 0;
    
    while(first_pointer < s.length){
        if(!set.has(s.charAt(first_pointer))){
            set.add(s.charAt(first_pointer));
            first_pointer++;
            max = Math.max(set.size, max);
        }else{
            set.delete(s.charAt(second_pointer));
            second_pointer++;
        }
    }
    return max;
};