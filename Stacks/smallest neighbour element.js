function nearestSmallerToLeft(arr) {
    let stack = [];
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
            stack.pop();
        }
        
        if (stack.length === 0) {
            result.push(-1);
        } else {
            result.push(stack[stack.length - 1]);
        }
        
        stack.push(arr[i]);
    }
    
    return result;
}

// Example usage:
let arr = [4, 5, 2, 10, 8];
console.log(nearestSmallerToLeft(arr)); // Output: [-1, 4, -1, 2, 2]
