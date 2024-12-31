function firstNegativeInWindow(arr, k) {
    let result = [];
    let queue = []; // To store indices of negative numbers in the current window

    // Process the first window
    for (let i = 0; i < k; i++) {
        if (arr[i] < 0) {
            queue.push(i);
        }
    }

    // Add the first result
    result.push(queue.length > 0 ? arr[queue[0]] : 0);

    // Process the remaining windows
    for (let i = k; i < arr.length; i++) {
        // Remove elements no longer in the window
        while (queue.length > 0 && queue[0] < i - k + 1) {
            queue.shift();
        }

        // Add the current element if it's negative
        if (arr[i] < 0) {
            queue.push(i);
        }

        // Add the first negative number of the current window to the result
        result.push(queue.length > 0 ? arr[queue[0]] : 0);
    }

    return result;
}

// Example Usage
let arr = [12, -1, -7, 8, -15, 30, 16, 28];
let k = 3;
console.log(firstNegativeInWindow(arr, k)); 
// Output: [-1, -1, -7, -15, -15, 0]
