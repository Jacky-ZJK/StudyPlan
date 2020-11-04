/*
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let curl1 = l1
  let curl2 = l2
  let newNode =  new ListNode( 0 )
  let cur = newNode
  let carry = 0
  while( curl1 !== null || curl2 !== null ) {
      let x = ( curl1 !== null ) ? curl1.val : 0
      let y = ( curl2 !== null ) ? curl2.val : 0
      let sum = x + y + carry
      carry = Math.floor( sum / 10 )
      cur.next = new ListNode( sum % 10 )
      cur = cur.next
      if ( curl1 !== null ) curl1 = curl1.next
      if ( curl2 !== null ) curl2 = curl2.next
  }
  if ( carry > 0 ) {
      cur.next = new ListNode( carry )
  }

  return newNode.next
}; 