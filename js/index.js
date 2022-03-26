"use strict";
/**
 * LINKED LIST
 */
// object for storing a single node of a linked
class ListNode {
    constructor(data) {
        this.data = data;
        this.nextNode = null;
    }
}
// singly linked list
class LinkedList {
    constructor() {
        this.head = null;
    }
}
const node1 = new ListNode(10);
const node2 = new ListNode(20);
node1.nextNode = node2;
console.log(node1);
