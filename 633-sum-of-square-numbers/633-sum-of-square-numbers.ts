function judgeSquareSum(c: number): boolean {
    let a:number = 0;
    let b:number = Math.floor(Math.sqrt(c));
    
    while(a<=b){
        let result:number = (a*a) + (b*b);
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