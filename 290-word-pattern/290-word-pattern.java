class Solution {
    public boolean wordPattern(String pattern, String s) {
        String arr[] = s.split(" ");
        if(arr.length != pattern.length()){
            return false;
        }
        
        HashMap<String,Character> firstMap = new HashMap<> ();        
        HashMap<Character,Boolean> secondMap = new HashMap<> ();
        
for(int i =0;i<pattern.length();i++){
    char ch = pattern.charAt(i);
    String str = arr[i];
    if(firstMap.containsKey(str)){
            if(firstMap.get(str)!=ch){
                return false;
            }
        }
    else{
            if(secondMap.containsKey(ch)){
                return false;
            }
            else{
            firstMap.put(str,ch);
            secondMap.put(ch,true);
            }
     }
    }
    return true;
    }
}
