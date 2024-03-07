function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) return -1; // base case: target not found

    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;

    if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
    else return binarySearch(arr, target, mid + 1, high);
}

// Example usage
const arr = [1, 3, 5, 7, 8, 9];
console.log(binarySearch(arr, 5)); // Outputs: 2
