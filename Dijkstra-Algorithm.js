// Dijkstra's Algorithm finds the shortest paths from a start node to all other nodes in a weighted graph.

function dijkstra(graph, start) {
    const distances = {};
    const prev = {};
    const visited = new Set();
    Object.keys(graph).forEach(node => distances[node] = Infinity);
    distances[start] = 0;

    const queue = new PriorityQueue();
    queue.enqueue(start, 0);

    while (!queue.isEmpty()) {
        const {element: node} = queue.dequeue();
        visited.add(node);

        Object.keys(graph[node]).forEach(neighbor => {
            if (!visited.has(neighbor)) {
                const alt = distances[node] + graph[node][neighbor];
                if (alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    prev[neighbor] = node;
                    queue.enqueue(neighbor, distances[neighbor]);
                }
            }
        });
    }

    return distances;
}

// Note: PriorityQueue class implementation is required here. This example assumes its availability.
