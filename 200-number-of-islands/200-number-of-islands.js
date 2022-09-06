/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let numberOfIslands = 0
    let rows = grid.length
    let cols = grid[0].length
    
    function DFS(grid, r, c){
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] != "1"){
            return;
        }
        
        grid[r][c] = "0"
        
        DFS(grid, r, c-1) //left
        DFS(grid, r, c+1) //right
        DFS(grid, r-1, c) //top
        DFS(grid, r+1, c) //bottom
    }
    
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(grid[r][c] == "1"){
                DFS(grid, r, c)
                numberOfIslands++
            }
        }
    }
    
    return numberOfIslands
};