// Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/submissions/

var maxProfit = function(prices) {
    var buy = prices[0]
    var profit = 0
    
    for (i=0; i<prices.length; i++) {
        if (prices[i] <= buy) {
            buy = prices[i]
        }
        else if (prices[i] > prices[i + 1] || !prices[i + 1]) {
            profit += prices[i] - buy
            buy = prices[i + 1]
        }
    }
    
    return profit
    
};