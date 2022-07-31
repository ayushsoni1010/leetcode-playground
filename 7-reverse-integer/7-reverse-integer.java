class Solution {
    public int reverse(int x) {
        if (x <= Integer.MIN_VALUE || x >= Integer.MAX_VALUE) return 0;  
        int sign = x < 0 ? -1 : 1;
        int remainder = 0;
        int temp = 0;
        
        while(x != 0){
            remainder = x % 10;
            x = x / 10;
            if (sign < 0){
                if (temp < Integer.MIN_VALUE / 10 || Integer.MIN_VALUE - temp * 10 > remainder) return 0;
            }else{
                if (temp > Integer.MAX_VALUE / 10 || Integer.MAX_VALUE - temp * 10 < remainder) return 0;
            }
            temp = temp * 10 + remainder;
        }
        return temp;
    }
}