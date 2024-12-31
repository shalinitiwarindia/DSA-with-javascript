class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(value) {
        this.stack.push(value);
        if (this.minStack.length === 0 || value <= this.getMin()) {
            this.minStack.push(value);
        }
    }

    pop() {
        if (this.stack.length === 0) {
            return "Stack is empty";
        }
        let removed = this.stack.pop();
        if (removed === this.getMin()) {
            this.minStack.pop();
        }
        return removed;
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// Example Usage
let minStack = new MinStack();
minStack.push(3);
minStack.push(5);
console.log(minStack.getMin()); // Output: 3
minStack.push(2);
minStack.push(1);
console.log(minStack.getMin()); // Output: 1
minStack.pop();
console.log(minStack.getMin()); // Output: 2
