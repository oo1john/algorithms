def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i  # Return the index of the target element
    return -1  # Element not found

# Example usage
arr = [5, 3, 8, 4, 2]
target = 4
print(linear_search(arr, target))  # Output: 3
