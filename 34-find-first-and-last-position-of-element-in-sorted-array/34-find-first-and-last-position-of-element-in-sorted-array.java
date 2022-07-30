class Solution {
    public int[] searchRange(int[] nums, int target) {
        int[] answer = {-1,-1};
        
        answer[0] = searchPosition(nums, target, true);
        if(answer[0] != -1){
            answer[1] = searchPosition(nums, target, false);
        }
        return answer;
    }
    int searchPosition(int[] arr, int target, boolean isFirstIndex){
        int ans = -1;
        int start = 0;
        int end = arr.length - 1;
        
        while(start <= end){
            int middle = start + (end - start) / 2;
            
            if(target < arr[middle]){
                end = middle - 1;
            }
            else if(target > arr[middle]){
                start = middle + 1;
            }
            else{
                ans = middle;
                if(isFirstIndex){
                    end = middle - 1;
                }
                else{
                    start = middle + 1;
                }
            }
        }
        return ans;
    }
}