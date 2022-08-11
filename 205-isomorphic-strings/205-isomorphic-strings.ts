function isIsomorphic(s: string, t: string): boolean {
    let mapS:any = new Map();
    let mapT:any = new Map();
    
    for(let i=0;i<s.length;i++){
        let sChar:string = s[i];
        let tChar:string = t[i];
        
        if((mapS.has(sChar) && mapS.get(sChar) !== tChar) || (mapT.has(tChar) && mapT.get(tChar) !== sChar)){
            return false;
        }
        mapS.set(sChar,tChar);
        mapT.set(tChar,sChar);
    }
    return true;
};