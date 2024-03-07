def flip_bits(n):
    # Assume n is a 32-bit integer
    return n ^ 0xFFFFFFFF

# Example usage
print(flip_bits(9))  # Outputs: 4294967286 (flipped binary of 9 for a 32-bit integer)
