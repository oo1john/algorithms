function countSetBits(n) {
    let count = 0;
    while (n) {
        count += n & 1;
        n >>>= 1;
    }
    return count;
}

// Example usage
console.log(countSetBits(9)); // Outputs: 2 (binary 1001 has two 1s)
