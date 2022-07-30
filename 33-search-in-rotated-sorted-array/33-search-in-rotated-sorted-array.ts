function search(nums: number[], target: number): number {
    let answer:number = SearchInRotatedArray(nums, target);
    return answer;
}
function findPivot(arr: number[]):number{
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let middle = Math.floor(start + (end - start) / 2);

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

function SearchInRotatedArray(arr:number[],target:number):any{
    let pivot = findPivot(arr);
    if(pivot == -1){
        return binarySearchInRotatedArray(arr,target, 0,arr.length-1);
    }

    if(arr[pivot] == target){
        return pivot;
    }
    if(target >= arr[0]){
        return binarySearchInRotatedArray(arr, target, 0, pivot-1);
    }
    return binarySearchInRotatedArray(arr, target, pivot+1, arr.length-1);
}

function binarySearchInRotatedArray(arr:number[], target:number, start:number, end:number):number{
    while(start <= end){
        let middle = Math.floor(start + (end - start) / 2);

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