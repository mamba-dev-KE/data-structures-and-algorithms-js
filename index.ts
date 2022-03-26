/**
 * LINKED LIST
 */

// object for storing a single node of a linked
class ListNode<T> {
  data: T;
  nextNode: any;

  constructor(data: T) {
    this.data = data;
    this.nextNode = null;
  }
}

// singly linked list
class LinkedList<T> {
  head: ListNode<T> | null;

  constructor() {
    this.head = null;
  }
}

const node1 = new ListNode(10);
const node2 = new ListNode(20);

node1.nextNode = node2;

console.log(node1);
