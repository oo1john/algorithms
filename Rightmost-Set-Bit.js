function rightmostSetBit(n) {
    return n & (-n);
}

// Example usage
console.log(rightmostSetBit(12)); // Outputs: 4 (binary 1100, rightmost set bit is at position 2^2 = 4)
