function longestCommonPrefix(strs: string[]): string {
    const emptyIndex:number = strs.findIndex(item => item === "");
    if(strs.length === 0 || emptyIndex !== -1){
        return "";
    }
    
    let commonFirstChar:string = "";
    
    for(let i:number = 0; i < strs.length; i++){
        const firstChar:string = strs[i].substring(0,1);
        if(commonFirstChar === ""){
            commonFirstChar = firstChar;
        }else{
            if(firstChar !== commonFirstChar){
                return "";
            }
        }
    }
    const newStrs:string[] = strs.map(item => item.substring(1));
    return commonFirstChar + longestCommonPrefix(newStrs);
};