class Solution {
    public boolean squareIsWhite(String coordinates) {
//      Solving the problem using hashmaps
        Map<Character, Integer> map = new HashMap<>();
        map.put('a', 1);
        map.put('b', 2);
        map.put('c', 1);
        map.put('d', 2);
        map.put('e', 1);
        map.put('f', 2);
        map.put('g', 1);
        map.put('h', 2);
        
        if(map.containsKey(coordinates.charAt(0))){
            Integer val = map.get(coordinates.charAt(0));
            if(val % 2 != 0 && coordinates.charAt(1) % 2 == 0){
                return true;
            }else if(val % 2 == 0 && coordinates.charAt(1) % 2 != 0){
                return true;
            }else {
                return false;
            }
        }
        return false;
    }
}