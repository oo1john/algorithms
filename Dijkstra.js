function dijkstra(graph, start) {
    const distances = {};
    const prev = {};
    const visited = new Set();
    for (const node in graph) {
        distances[node] = Infinity;
        prev[node] = null;
    }
    distances[start] = 0;

    const queue = new PriorityQueue();
    queue.enqueue(start, 0);

    while (!queue.isEmpty()) {
        const { element: node } = queue.dequeue();
        visited.add(node);

        for (const neighbor in graph[node]) {
            if (!visited.has(neighbor)) {
                const newDist = distances[node] + graph[node][neighbor];
                if (newDist < distances[neighbor]) {
                    distances[neighbor] = newDist;
                    prev[neighbor] = node;
                    queue.enqueue(neighbor, distances[neighbor]);
                }
            }
        }
    }

    return { distances, prev };
}

// Note: PriorityQueue implementation is omitted for brevity. It's a helper class needed for the priority queue operations used in Dijkstra's algorithm.
