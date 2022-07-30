/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let result;
    result = accounts.map(e => {
        let items = e.reduce((total,item)=>total + item, 0);
        return items;
    });
    return Math.max(...new Set(result));
};