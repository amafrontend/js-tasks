const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B', 'R'],
  E: ['B', 'F'],
  F: ['C', 'E', 'R'],
  R: ['D', 'F'],
};

function shortestPath(graph, start, end) {
  const stack = [[start]]; // [[A]]
  const visited = new Set([start]);

  while (stack.length > 0) {
    const path = stack.shift(); // [A]
    const point = path[path.length - 1]; // A

    if (point === end) {
      return path;
    }

    for (const pathElement of graph[point]) {
      if (!visited.has(pathElement)) {
        stack.push([...path, pathElement]); //
        visited.add(pathElement); //
      }
    }
  }

  return null;
}

console.log(shortestPath(graph, 'A', 'F')); // ['A', 'C', 'F']
console.log(shortestPath(graph, 'A', 'D')); // ['A', 'B', 'D']
console.log(shortestPath(graph, 'A', 'R')); // ['A', 'B', 'D', 'R']
console.log(shortestPath(graph, 'C', 'E')); // ['C', 'F', 'E']

