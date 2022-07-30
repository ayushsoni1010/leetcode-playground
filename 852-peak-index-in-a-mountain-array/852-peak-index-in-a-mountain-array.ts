function peakIndexInMountainArray(arr: number[]): number {
    let start:number = 0;
    let end:number = arr.length - 1;
    
    while(start < end){
        let middle:number = Math.floor(start + (end - start) / 2);
        if(arr[middle] > arr[middle + 1]){
            end = middle;
        }else{
            start = middle + 1;
        }
    }
    return start;
};