function slidingWindowMaximum(arr, k) {
    let result = [];
    let deque = []; // Store indices of array elements

    for (let i = 0; i < arr.length; i++) {
        // Remove elements not in the current window
        while (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Remove all elements smaller than the current element from the deque
        while (deque.length > 0 && arr[deque[deque.length - 1]] <= arr[i]) {
            deque.pop();
        }

        // Add the current element at the end of the deque
        deque.push(i);

        // Add the maximum element of the current window to the result
        if (i >= k - 1) {
            result.push(arr[deque[0]]);
        }
    }

    return result;
}

// Example Usage
let arr = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;
console.log(slidingWindowMaximum(arr, k)); 
// Output: [3, 3, 5, 5, 6, 7]
