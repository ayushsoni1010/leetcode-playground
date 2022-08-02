class Solution {
    public boolean judgeSquareSum(int c) {
        long a = 0;
        long b = (int)Math.sqrt(c);
        
        while(a<=b){
            long result = a*a + b*b;
            if(result == c){
                return true;
            }
            if(result > c){
                b--;
            }else{
                a++;
            }
        }
        return false;
    }
}