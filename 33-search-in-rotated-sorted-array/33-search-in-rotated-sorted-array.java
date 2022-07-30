class Solution {
    public int search(int[] nums, int target) {
        int answer = SearchInRotatedArray(nums, target);
        return answer;
    }
    int findPivot(int[] arr){
        int start = 0;
        int end = arr.length - 1;

        while(start <= end){
            int middle = start + (end - start) / 2;

//          4 cases over here
            if(middle < end && arr[middle] > arr[middle + 1]){
                return middle;
            }
            if(middle > start && arr[middle] < arr[middle - 1]){
                return middle - 1;
            }
            if(arr[middle] <= arr[start]){
                end = middle -1;
            }
            else{
                start = middle + 1;
            }
        }
        return -1;
    }

    int SearchInRotatedArray(int[] arr,int target){
        int pivot = findPivot(arr);

//        if we do not find a pivot, it means the array is not rotated
        if(pivot == -1){
//            just do normal binary search
            return binarySearchInRotatedArray(arr,target, 0,arr.length-1);
        }
//        if pivot is found, you have found 2 ascending sorted arrays
        if(arr[pivot] == target){
            return pivot;
        }
        if(target >= arr[0]){
            return binarySearchInRotatedArray(arr, target, 0, pivot-1);
        }
        return binarySearchInRotatedArray(arr, target, pivot+1, arr.length-1);
    }

    int binarySearchInRotatedArray(int[] arr, int target, int start, int end){
        while(start <= end){
            int middle = start + (end - start) / 2;

            if(target < arr[middle]){
                end = middle - 1;
            }
            else if(target > arr[middle]){
                start = middle + 1;
            }
            else{
                return middle;
            }
        }
        return -1;
    }    
}