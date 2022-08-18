class Solution {
    public boolean isPowerOfFour(int n) {
        if(n == 0) return false;
        double firstNum = Math.log((double)n);
        double secondNum = Math.log(4);
        double num = firstNum / secondNum;
        return num == Math.floor(num);
    }
}