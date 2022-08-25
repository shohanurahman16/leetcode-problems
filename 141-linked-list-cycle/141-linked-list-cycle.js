/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let arrayOfNodes = []
    
    return head ? traverseLinkedList(head) : false
    
    function traverseLinkedList(head) {
        if(arrayOfNodes.indexOf(head) >= 0){
            return true
        }
        arrayOfNodes.push(head)
        return head.next ? traverseLinkedList(head.next) : false
    }
};