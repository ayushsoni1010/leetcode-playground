function maximumWealth(accounts: number[][]): number {
    let result:number[];
    result = accounts.map(e => {
        let items = e.reduce((total,item)=> total + item,0);
        return items;
    })
    return Math.max(...new Set(result));
};