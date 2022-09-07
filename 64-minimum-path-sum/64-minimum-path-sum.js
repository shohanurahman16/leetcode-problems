/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length
    let n = grid[0].length
    
    
    // DFS solution
//     function DFS(i, j, memo = {}){
//         const objectKey = `${i}-${j}`
        
//         if(memo[objectKey]) return memo[objectKey]
        
//         if(i < 0 || j < 0) return Number.MAX_SAFE_INTEGER
//         if(i==0 && j==0) return grid[i][j]
        
//         memo[objectKey] = Math.min(DFS(i-1, j, memo), DFS(i, j-1, memo)) + grid[i][j]
        
//         return memo[objectKey]
//     }
    
//     return DFS(m-1, n-1)
    
    // BFS solution
    let dp = []
    for(let i=0; i <= m; i++){
        dp[i] = []
    }
    
    for(let i=0; i< m; i++){
        for(let j=0; j <n; j++){
            if(i> 0 && j > 0){
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
            }
            else if(i > 0){
                dp[i][j] = dp[i-1][j] + grid[i][j]
            }
            else if(j > 0){
                 dp[i][j] = dp[i][j-1] + grid[i][j]
            }
            else{
                dp[i][j] = grid[i][j]
            }
        }
    }
    
    return dp[m-1][n-1]
};