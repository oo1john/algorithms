def linear_search(arr, target):
    for i, value in enumerate(arr):
        if value == target:
            return i  # Target found
    return -1  # Target not found

# Example usage
print(linear_search([1, 3, 5, 7, 9], 7))  # Outputs: 3
