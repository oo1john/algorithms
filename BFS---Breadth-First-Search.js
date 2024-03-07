function bfs(graph, startNode) {
    const visited = new Set();
    const queue = [startNode];

    while (queue.length > 0) {
        const node = queue.shift(); // Remove and get the first element in the queue

        if (!visited.has(node)) {
            visited.add(node);
            console.log(node); // Processing node

            const neighbors = graph[node];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }
}

// Example usage
const graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
};
bfs(graph, 2);
