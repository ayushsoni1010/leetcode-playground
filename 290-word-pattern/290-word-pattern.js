/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const stringAsArray = s.split(" ");
  if(pattern.length !== stringAsArray.length) return false;
  const stringToPatternMap = {};
  const patternToStringMap = {};
  
  for(let i = 0 ; i < pattern.length ; i++){
    const patternChar = pattern[i];
    const str = stringAsArray[i];
    
    if(!(str in stringToPatternMap) && patternChar in patternToStringMap)
      return false;
    
    if(str in stringToPatternMap && stringToPatternMap[str] !== patternChar)
      return false;
    
    stringToPatternMap[str] = patternChar;
    patternToStringMap[patternChar] = str;
  }
  return true;    
};