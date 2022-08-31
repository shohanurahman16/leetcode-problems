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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    invert(root)
    function invert(root){
        if (!root) return
        if(root.left || root.right){
            let left = root.left ? root.left : null
            let right = root.right ? root.right : null
            root.left = right
            root.right = left
            
            return invert(root.left) || invert(root.right)
        }
    }
    
    return root
};