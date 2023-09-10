/** Node: node for a queue. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /** enqueue(val): add new value to end of the queue. Returns undefined. */

    enqueue(val) {
        let newNode = new Node(val);
        if (this.first === null) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode; // Links Old node to the new node
            this.last = newNode;
        }
        this.size++;
    }

    /** dequeue(): remove the node from the start of the queue
     * and return its value. Should throw an error if the queue is empty. */

    dequeue() {
        if (this.size === 0) {
            throw new Error('Empty Linked List');
        }
        let currentNode = this.first;
        this.first = null;
        this.first = currentNode.next;
        this.size--;

        // Check if the length of the linked list is empty after the values are removed and set the first and the last
        if (this.size === 0) {
            this.first = null;
            this.last = null;
        }
        return currentNode.val;
    }

    /** peek(): return the value of the first node in the queue. */

    peek() {
        return this.first.val;
    }

    /** isEmpty(): return true if the queue is empty, otherwise false */

    isEmpty() {
        return this.size === 0;
    }
}

module.exports = Queue;
