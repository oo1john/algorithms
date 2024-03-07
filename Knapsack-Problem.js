// The 0-1 Knapsack problem is a problem in combinatorial optimization: Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible. It is called a 0-1 knapsack problem since each item can be used once or not used at all.

// Using Tabulation

function knapsack(values, weights, capacity) {
    const dp = Array(values.length + 1).fill().map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= values.length; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[values.length][capacity];
}

// Example usage
const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 50;
console.log(knapsack(values, weights, capacity)); // Outputs: 220
