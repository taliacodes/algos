// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.



const mergeTwoLists = (l1, l2) => {
  let l3 = new ListNode(-1)
  let head = l3

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      l3.next = l1
      l1 = l1.next
    }
    else {
      l3.next = l2
      l2 = l2.next
    }
    l3 = l3.next
  }
  if (l1 !== null) {
    l3.next = l1
  }
  if (l2 !== null) {
    l3.next = l2
  }
  return head.next
}

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4