// a deep explaination of the problem https://javascript.plainenglish.io/javascript-reverse-linked-list-a2d235d64548
// a link list is data structure
// this is a very common question on interviews
// your code should do this
// input: 1->2->3->4->5->NULL
// 5->4->3->2->1->NULL

// time complexity o(n)
// space complexity o(l)

// iterative approach
const reverseList = head => {
  let prev = null
  let next = null
  let current = head

  while(current !== null) {
    next = current.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
};

//recursive approach
