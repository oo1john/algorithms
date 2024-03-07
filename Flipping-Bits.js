function flipBits(n) {
    // JavaScript bitwise operations treat numbers as 32-bit signed integers
    return ~n >>> 0; // Use unsigned right shift to get the correct 32-bit representation
}

// Example usage
console.log(flipBits(9)); // Outputs: 4294967286 (flipped binary of 9 for a 32-bit unsigned integer)
