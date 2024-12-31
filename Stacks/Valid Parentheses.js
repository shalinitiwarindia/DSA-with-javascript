function isValidParentheses(s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Example Usage
console.log(isValidParentheses("()[]{}")); // Output: true
console.log(isValidParentheses("(]"));     // Output: false
