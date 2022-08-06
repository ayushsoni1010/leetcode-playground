function lengthOfLastWord(s: string): number {
    let str:string[] = s.trim().split(" ");
    return str[str.length - 1].length;
};