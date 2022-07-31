/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
        let roman = {
        'M': 1000,
        'CM': 900,
        'D':500,
        'CD':400,
        'C':100,
       'XC':90,
        'L':50,
        'XL':40,
        'X':10,
        'IX':9,
        'V':5,
        'IV':4,
        'I':1
    }
     let str = s.replaceAll("CM", "DCCCC").replaceAll("CD", "CCCC").replaceAll("XC", "LXXXX").replaceAll("XL", "XXXX").replaceAll("IX", "VIIII").replaceAll("IV", "IIII");
    return Object.keys(roman).reduce((total,item)=>{
        for(let i=0;i<str.length;i++){
            if(str[i]===item){
                total+=roman[item]
            }
        }
        return total;
    },0);
};