/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let rows = grid.length
    let cols = grid[0].length
    let maxCounter = 0
    
    function DFS(grid, r, c){
        let counter = 0
        
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] != 1){
            return 0;
        }
        
        grid[r][c] = 0
        counter++
        
        counter = counter + DFS(grid, r, c-1) //left
        counter = counter + DFS(grid, r, c+1) //right
        counter = counter + DFS(grid, r-1, c) //top
        counter = counter + DFS(grid, r+1, c) //bottom
        
        return counter
    }
    
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(grid[r][c] == 1){
                maxCounter = Math.max(maxCounter, DFS(grid, r, c, 0))
            }
        }
    }
    
    return maxCounter
};