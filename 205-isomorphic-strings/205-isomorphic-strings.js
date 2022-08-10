/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapS = new Map();
    let mapT = new Map();
    
    for(let i=0;i < s.length++;i++){
        let sChar = s[i];
        let tChar = t[i];
        
        if ((mapS.has(sChar) && mapS.get(sChar) !== tChar) || (mapT.has(tChar) && mapT.get(tChar) !== sChar))
            return false; 
        mapS.set(sChar,tChar);
        mapT.set(tChar,sChar);
    }
    return true;
};