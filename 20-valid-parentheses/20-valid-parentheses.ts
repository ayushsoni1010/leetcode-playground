function isValid(s: string): boolean {
    let stack:string[] = [];
    const map:any = {
        ')':'(',
        ']':'[',
        '}':'{',
    }
    for(let i=0;i<s.length;i++){
        if(stack.length !== 0 && map[s[i]] === stack[stack.length - 1]){
            stack.pop();
        }else{
            stack.push(s[i]);
        }
    }
    return !stack.length;
};