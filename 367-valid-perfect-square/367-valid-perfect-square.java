class Solution {
    public boolean isPerfectSquare(int num) {
        return num > 0 && Math.sqrt(num) % 1 == 0;
    }
}