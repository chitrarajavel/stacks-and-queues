/** Node: node for a stack. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /** push(val): add new value to end of the stack. Returns undefined. */

    push(val) {
        let newNode = new Node(val);
        if (this.first === null) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first; // Links new node to the first of the existing linked list
            this.first = newNode;
        }
        this.size++;
    }

    /** pop(): remove the node from the top of the stack
     * and return its value. Should throw an error if the stack is empty. */

    pop() {
        if (this.size === 0) {
            throw new Error('Empty Linked List');
        }
        let currentNode = this.first;
        this.first = null;
        this.first = currentNode.next;
        this.size--;

        // Check if the size of the linked list is empty after the values are removed and set the first and the last
        if (this.size === 0) {
            this.first = null;
            this.last = null;
        }
        return currentNode.val;
    }

    /** peek(): return the value of the first node in the stack. */

    peek() {
        return this.first.val;
    }

    /** isEmpty(): return true if the stack is empty, otherwise false */

    isEmpty() {
        return this.size === 0;
    }
}

module.exports = Stack;
