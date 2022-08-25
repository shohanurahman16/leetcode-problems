/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0
    let buyPrice = prices[0]
    let localProfit = 0
    for(let i=1; i < prices.length; i++){
        if(prices[i] < buyPrice){
            buyPrice = prices[i]
            localProfit = 0
        }
        else if(prices[i] > buyPrice && prices[i] - buyPrice > localProfit){
            localProfit = prices[i] - buyPrice
        }
        
        if(localProfit > maxProfit){
            maxProfit = localProfit
        }
    }
    return Math.max(maxProfit, localProfit)
};