/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let start:number = 0;
        let end:number = n - 1;
        
        while(start <= end){
            let middle:number = Math.floor(start + (end - start)/2);
            if(isBadVersion(middle)){
                end = middle - 1;
            }
            else{
                start = middle + 1;
            }
        }
        return start;
    };
};