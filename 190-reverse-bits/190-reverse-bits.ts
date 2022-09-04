function reverseBits(n: number): number {
	let ans:number = 0;
    
    for(let i=0; i<32; i++){
        ans = ans * 2 + n % 2;
        n = n >>> 1;
    }
    return ans;
};

