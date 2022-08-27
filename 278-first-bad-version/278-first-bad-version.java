/* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */

public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        int start = 0;
        int end = n - 1;
        
        while(start <= end){
            int middle = start + (end - start) / 2;
            if(isBadVersion(middle)){
                end = middle - 1;
            }else{
                start = middle + 1;
            }
        }
        return start;
    }
}