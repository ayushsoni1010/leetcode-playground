/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let start = 0;
    let end = arr.length - 1;

    while(start < end){
        let middle = Math.floor(start + (end - start) / 2);
        if(arr[middle] > arr[middle + 1]){
            end = middle;
        }
        else{
            start = middle + 1;
        }
    }
    return start;
};