function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Target found
        }
    }
    return -1; // Target not found
}

// Example usage
console.log(linearSearch([1, 3, 5, 7, 9], 7)); // Outputs: 3
