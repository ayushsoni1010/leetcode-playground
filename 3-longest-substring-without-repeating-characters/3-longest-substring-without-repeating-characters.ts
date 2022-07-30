function lengthOfLongestSubstring(s: string): number {
    let set:any = new Set();
    let first_pointer:number = 0;
    let second_pointer:number = 0;
    let max:number = 0;
    
    while(first_pointer < s.length){
        if(!set.has(s.charAt(first_pointer))){
            set.add(s.charAt(first_pointer));
            first_pointer++;
            max = Math.max(set.size, max);
        }else{
            set.delete(s.charAt(second_pointer));
            second_pointer++;
        }
    }
    return max;
};