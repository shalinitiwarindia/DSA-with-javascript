function orangesRotting(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let queue = [];
    let fresh = 0;

    // Initialize queue with all rotten oranges and count fresh oranges
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c, 0]); // (row, col, time)
            } else if (grid[r][c] === 1) {
                fresh++;
            }
        }
    }

    let directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0]
    ]; // Right, Down, Left, Up
    let time = 0;

    while (queue.length > 0) {
        let [r, c, t] = queue.shift();
        time = t;

        for (let [dr, dc] of directions) {
            let nr = r + dr;
            let nc = c + dc;

            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                grid[nr][nc] = 2; // Rot the orange
                fresh--; // Decrease fresh count
                queue.push([nr, nc, t + 1]); // Add to queue with updated time
            }
        }
    }

    return fresh === 0 ? time : -1; // Return -1 if there are still fresh oranges
}

// Example Usage
let grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
];
console.log(orangesRotting(grid)); 
// Output: 4
