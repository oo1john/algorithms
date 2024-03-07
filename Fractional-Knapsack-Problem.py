def fractional_knapsack(items, capacity):
    # Sort items by value to weight ratio
    items.sort(key=lambda x: x['value'] / x['weight'], reverse=True)

    total_value = 0
    for item in items:
        if capacity > 0 and item['weight'] <= capacity:
            # Take the whole item
            capacity -= item['weight']
            total_value += item['value']
        else:
            # Take the fraction of the item
            total_value += item['value'] * (capacity / item['weight'])
            break

    return total_value

# Example usage
items = [{'value': 60, 'weight': 10}, {'value': 100, 'weight': 20}, {'value': 120, 'weight': 30}]
capacity = 50
print(fractional_knapsack(items, capacity))  # Output: 240
