class Solution {
    public int splitArray(int[] arr, int m) {
     
        int start = 0;
        int end = 0;

        for (int i = 0; i < arr.length; i++) {
//          in the end of the loop this will contain the max item from the array
            start = Math.max(start, arr[i]);
            end += arr[i];
        }
//      binary search
        while(start < end){
//          try for the middle as potential answer
            int middle = start + (end - start) / 2;

//          calculate how many pieces you can divide this in with this max sum
            int sum = 0;
            int pieces = 1;
            for(int num : arr){
                if(sum + num > middle){
//                    you cannot add this in this subarray, make new one
//                    say you add this num in new subarray ,then sum = num
                    sum = num;
                    pieces++;
                }
                else{
                    sum += num;
                }
            }

            if(pieces > m){
                start = middle + 1;
            }
            else{
                end = middle;
            }
        }
        return start;
//        here start == end
    } 
}