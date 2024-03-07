def rightmost_set_bit(n):
    return n & (-n)

# Example usage
print(rightmost_set_bit(12))  # Outputs: 4 (binary 1100, rightmost set bit is at position 2^2 = 4)
