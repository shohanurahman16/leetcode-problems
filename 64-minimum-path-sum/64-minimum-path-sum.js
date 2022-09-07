/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length
    let n = grid[0].length
    
    function DFS(i, j, memo = {}){
        const objectKey = `${i}-${j}`
        
        if(memo[objectKey]) return memo[objectKey]
        
        if(i < 0 || j < 0) return Number.MAX_SAFE_INTEGER
        if(i==0 && j==0) return grid[i][j]
        
        memo[objectKey] = Math.min(DFS(i-1, j, memo), DFS(i, j-1, memo)) + grid[i][j]
        
        return memo[objectKey]
    }
    
    return DFS(m-1, n-1)
};