class Solution {
    public boolean isPalindrome(int x) {
        int temp = x;
        int sum = 0;
        if(Math.signum(x) == -1){
            return false;
        }
        while(x != 0){
            int rem = x % 10;
            sum = sum * 10 + rem;
            x = x / 10;
        }
        return temp == sum;
    }
}