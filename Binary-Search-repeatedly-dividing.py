def binary_search(arr, target, low=0, high=None):
    if high is None:
        high = len(arr) - 1
    if low > high:
        return -1  # base case: target not found

    mid = (low + high) // 2
    if arr[mid] == target:
        return mid

    if arr[mid] > target:
        return binary_search(arr, target, low, mid-1)
    else:
        return binary_search(arr, target, mid+1, high)

# Example usage
arr = [1, 3, 5, 7, 8, 9]
print(binary_search(arr, 5))  # Outputs: 2
