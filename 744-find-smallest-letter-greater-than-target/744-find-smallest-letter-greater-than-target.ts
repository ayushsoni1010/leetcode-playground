function nextGreatestLetter(letters: string[], target: string): string {
    let start:number = 0;
    let end:number = letters.length - 1;
    while(start <= end){
        let middle:number  = Math.floor(start + (end-start)/2);
        if(target < letters[middle]){
            end = middle - 1;
        }else{
            start = middle + 1;
        }
    }
    return letters[start % letters.length]
};