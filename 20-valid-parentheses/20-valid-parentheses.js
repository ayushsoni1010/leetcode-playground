/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    const map = {
        ')':'(',
        ']':'[',
        '}':'{',
    }
    for(let i=0;i<s.length;i++){
        if(stack.length !== 0 && map[s[i]] === stack[stack.length - 1]){
            stack.pop();
        }else{
            stack.push(s[i]);
        }
    }
    return !stack.length;
};