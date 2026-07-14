/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islands = 0;

    function dfs(row, col) {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
            return;
        }
        if (grid[row][col] !== "1") return;
        // Mark land as visited
        grid[row][col] = "0";

        // Visit neighboring cells
        dfs(row-1, col);
        dfs(row+1, col);
        dfs(row, col-1);
        dfs(row, col+1);
    }

    for (let row = 0; row <= grid.length; row++) {
        for (let col = 0; col <= grid[0].length; col++) {
            if (grid[row] && grid[row][col] === "1") {
                islands++;
                dfs(row, col);
            }
        }
    }

    return islands;
    // Time: O(rows * cols)
    // Space: O(rows * cols)
};