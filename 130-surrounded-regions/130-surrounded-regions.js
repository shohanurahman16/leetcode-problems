/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let rows = board.length
    let cols = board[0].length
    
    function DFS(board, r, c){
        if (r < 0 || r == rows || c < 0 || c == cols || board[r][c] != "O"){
            return;
        }
        
        board[r][c] = "."
        
        DFS(board, r, c-1) //left
        DFS(board, r, c+1) //right
        DFS(board, r-1, c) //top
        DFS(board, r+1, c) //bottom
    }
    
    //Modify edge O to something else
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(board[r][c] == "O" && (r == 0 || r == rows - 1) || (c == 0 || c == cols - 1)){
                DFS(board, r, c)
            }
        }
    }
    
    //Flip surrounded region
    for(let r = 1; r < rows - 1; r++){
        for(let c = 1; c < cols  - 1; c++){
            if(board[r][c] == "O"){
                board[r][c] = "X"
            }
        }
    }
    
    //Revert modified edge
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(board[r][c] == "."){
                board[r][c] = "O"
            }
        }
    }
    
    return board
};