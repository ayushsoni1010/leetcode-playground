function isMatch(s: string, p: string): boolean {
    let pattern:any = new RegExp('^' + p + '$');
    return pattern.test(s);
};