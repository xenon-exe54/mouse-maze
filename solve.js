
// solve.js
//
// Example mouse code that finds the shortest path using BFS.
// Works perfectly with the Mouse Maze Platform.
//

function solve(maze, start, end) {

    // Queue contains: [ [row, col], path_taken ]
    const queue = [[start, [start]]];

    // To avoid revisiting cells
    const visited = new Set([start.toString()]);

    // 4 possible movement directions
    const DIR = [
        [1, 0],   // down
        [-1, 0],  // up
        [0, 1],   // right
        [0, -1]   // left
    ];

    while (queue.length > 0) {

        const [[r, c], path] = queue.shift();  // current position + path

        // If we reached the end → return path
        if (r === end[0] && c === end[1]) {
            return path;
        }

        // Explore neighbors
        for (let [dr, dc] of DIR) {
            let nr = r + dr;
            let nc = c + dc;

            // Check boundaries
            if (nr >= 0 && nr < maze.length &&
                nc >= 0 && nc < maze[0].length) {

                // Check if cell is walkable and not visited
                if (maze[nr][nc] !== 1 && !visited.has([nr, nc].toString())) {
                    visited.add([nr, nc].toString());
                    queue.push([[nr, nc], [...path, [nr, nc]]]);
                }
            }
        }
    }

    // No path found
    return null;
}
