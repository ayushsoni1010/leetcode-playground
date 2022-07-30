class Solution {
    public int lengthOfLongestSubstring(String s) {
        Set<String> hash_set = new HashSet<String>();
        int first_pointer = 0;
        int second_pointer = 0;
        int max = 0;
        
        while(first_pointer < s.length()){
            if(!hash_set.contains(String.valueOf(s.charAt(first_pointer)))){
                hash_set.add(String.valueOf(s.charAt(first_pointer)));
                first_pointer++;
                max = Math.max(hash_set.size(), max);
            }else{
                hash_set.remove(String.valueOf(s.charAt(second_pointer)));
                second_pointer++;
            }
        }
        return max;
    }
}