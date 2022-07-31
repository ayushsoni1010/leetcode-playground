function myAtoi(s: string): number {
    let result = parseInt(s.trim());
    if(result >= 2147483648 ){
        return 2147483647 * Math.sign(result);
    }else if( result <= -2147483648){
        return 2147483648 * Math.sign(result);
    }
    return result.toString() === 'NaN' ? 0 : result;
};