// Link: https://leetcode.com/problems/min-cost-climbing-stairs/submissions/

var minCostClimbingStairs = function(cost) {
    var neighbor1 = 0
    var neighbor2 = 0
    
    for (i=0; i<cost.length; i++) {
        if (i % 2 == 0) {
            neighbor2 = Math.min(neighbor2 + cost[i], neighbor1 + cost[i])
        }
        else {
            neighbor1 = Math.min(neighbor2 + cost[i], neighbor1 + cost[i])
        }
    }
    
    return Math.min(neighbor1, neighbor2)
    
};