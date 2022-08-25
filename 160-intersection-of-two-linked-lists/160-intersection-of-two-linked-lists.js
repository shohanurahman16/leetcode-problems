/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    arrayOfHeadA = []
    while(headA != null){
        arrayOfHeadA.push(headA)
        headA = headA.next
    }
    while(headB != null){
        if(arrayOfHeadA.indexOf(headB) >= 0){
            return headB;
        }
        headB = headB.next;
    }
};