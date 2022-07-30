class Solution {
    public int maximumWealth(int[][] accounts) {
        int ans = Integer.MIN_VALUE;
        for(int[] arr : accounts){
            int sum = 0;
            for(int element: arr){
                sum += element;
            }
            if(sum > ans){
                ans = sum;
            }
        }
        return ans;
    }
}