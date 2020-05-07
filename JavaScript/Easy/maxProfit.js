// Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/

var maxProfit = function(prices) {
    var smallestNum = prices[0]
    var highestProfit = 0
    
    for (i=1; i<prices.length; i++) {
      console.log(smallestNum, highestProfit)
        if (prices[i] < smallestNum) {
            smallestNum = prices[i]
        }
        if (prices[i] - smallestNum > highestProfit) {
            highestProfit = prices[i] - smallestNum
        }
    }
    
    return highestProfit
};