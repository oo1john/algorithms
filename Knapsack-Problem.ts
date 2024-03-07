# Using Tabulation

def knapsack(values, weights, capacity):
    dp = [[0 for x in range(capacity + 1)] for x in range(len(values) + 1)]

    for i in range(1, len(values) + 1):
        for w in range(1, capacity + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i-1][w], dp[i-1][w-weights[i-1]] + values[i-1])
            else:
                dp[i][w] = dp[i-1][w]

    return dp[len(values)][capacity]

# Example usage
values = [60, 100, 120]
weights = [10, 20, 30]
capacity = 50
print(knapsack(values, weights, capacity))  # Outputs: 220
