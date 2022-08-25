/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    return binaryTraverse(root, 0, targetSum)
};

var binaryTraverse = function (currentNode, currentSum, targetSum){
    if(!currentNode){
        return false
    }
    
    currentSum = currentSum + currentNode.val
    
    if(currentNode.left === null && currentNode.right === null){
        return currentSum === targetSum
    }
    
    return binaryTraverse(currentNode.left, currentSum, targetSum) || binaryTraverse(currentNode.right, currentSum, targetSum)
}