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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    
    return root == null || isSymmetricChecker(root.left, root.right)
    
    function isSymmetricChecker(leftNode, rightNode){
        if(leftNode == null || rightNode == null){
            return leftNode == rightNode
        }
        if(leftNode.val != rightNode.val){
            return false
        }
        
        return isSymmetricChecker(leftNode.left, rightNode.right) && isSymmetricChecker(leftNode.right, rightNode.left)
    }
};