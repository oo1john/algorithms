def count_set_bits(n):
    count = 0
    while n:
        count += n & 1
        n >>= 1
    return count

# Example usage
print(count_set_bits(9))  # Outputs: 2 (binary 1001 has two 1s)
