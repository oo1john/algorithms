function fractionalKnapsack(items, capacity) {
    // Sort items by value to weight ratio
    items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

    let totalValue = 0;
    for (let item of items) {
        if (capacity > 0 && item.weight <= capacity) {
            // Take the whole item
            capacity -= item.weight;
            totalValue += item.value;
        } else {
            // Take the fraction of the item
            totalValue += item.value * (capacity / item.weight);
            break;
        }
    }

    return totalValue;
}

// Example usage
const items = [{value: 60, weight: 10}, {value: 100, weight: 20}, {value: 120, weight: 30}];
const capacity = 50;
console.log(fractionalKnapsack(items, capacity)); // Output: 240
