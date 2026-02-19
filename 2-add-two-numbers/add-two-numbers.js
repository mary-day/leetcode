/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0);
    let tail = result;
    let carry = 0;
    // Loop as long as l1 or l2 have digits, or there's a carry
    while (l1 || l2 || carry) {
        // grab numbers to sum from l1 & l2, otherwise use 0
        const num1 = l1 ? l1.val : 0;
        const num2 = l2 ? l2.val : 0;

        // calculate sum and new carry
        const sum = num1 + num2 + carry;
        carry = Math.floor(sum / 10);

        // create new ListNode
        tail.next = new ListNode(sum % 10);
        tail = tail.next;

        // if there are remaining digits in linked list, point to next node
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    return result.next;
};