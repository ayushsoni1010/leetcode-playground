/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const emptyIndex = strs.findIndex(item => item === "");
    if(strs.length === 0 || emptyIndex !== -1){
        return "";
    }
    
    let commonFirstChar = "";
    for(let i = 0; i < strs.length; i++){
        const firstChar = strs[i].substring(0,1);
        if(commonFirstChar === ""){
            commonFirstChar = firstChar;
        }else{
            if(firstChar !== commonFirstChar){
                return "";
            }
        }
    }
    
    const newStrs = strs.map(item => item.substring(1));
    return commonFirstChar + longestCommonPrefix(newStrs);
};