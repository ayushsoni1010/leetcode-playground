/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let a = 0;
    let b = Math.floor(Math.sqrt(c));
    
    while(a<=b){
        let result = a*a + b*b;
        if(result === c){
            return true;
        }
        if(result > c){
            b--;
        }else{
            a++;
        }
    }
    return false;
};