var memo = {}; 
var climbingStairs = function (n){
    if (n <=2){
        return n;
    }
    if (memo[n]){
        return memo [n];
    }
    memo[n] = climbingStairs(n-1)+climbingStairs(n-2);
    return memo[n];
}