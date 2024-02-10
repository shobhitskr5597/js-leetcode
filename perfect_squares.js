var numSquares = function(n) {
    let dp = Array(n+1).fill(Infinity);
    dp[0] = 0;

    for (let i=1; i<= n; i++) {
        for (let j=1; j*j<=i;j++) {
            // console.log(dp[i], "---", dp[i-(j*j)]+1)
            dp[i] = Math.min(dp[i], dp[i- (j*j)]+1)
            // console.log("Value of dp[i] ", dp[i])
        }
    }
    return dp[n]
};

const num1 = 12;
const num2 = 13;

console.log(numSquares(num1));
// console.log(numSquares(num2));