/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let buyIndex = null;
    let sellIndex = null;
    
    for(let i=0;i<prices.length;i++){
        let currentPrice = prices[i];
        if(buyIndex === null || currentPrice < prices[buyIndex]){
            buyIndex = i;
            sellIndex = null;
            continue;
        }
        
        if(buyIndex !== null && (sellIndex === null || currentPrice > prices[sellIndex])){
            sellIndex = i;
            let renewedProfit = prices[sellIndex] - prices[buyIndex];
            if(renewedProfit > profit){
                profit = renewedProfit ;
            }
        }
    }
    return profit;
};