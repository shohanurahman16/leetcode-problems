/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let arrayOfNodes = []
    
    return head ? traverseLinkedList(head) : null
    
    function traverseLinkedList(head) {
        if(arrayOfNodes.indexOf(head) >= 0){
            return head
        }
        arrayOfNodes.push(head)
        return head.next ? traverseLinkedList(head.next) : null
    }
};