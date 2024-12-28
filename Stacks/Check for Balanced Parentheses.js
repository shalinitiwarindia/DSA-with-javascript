function isBalanced(expression) {
    let stack = [];
    let pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of expression) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false; // Not balanced
            }
        }
    }

    return stack.length === 0; // True if stack is empty
}

// Example
console.log(isBalanced("{[()]}")); // Output: true
console.log(isBalanced("{[(])}")); // Output: false
