class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }
    peek() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
