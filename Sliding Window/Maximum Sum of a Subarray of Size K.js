function maxSumSubarray(arr, k) {
    let maxSum = 0;
    let currentSum = 0;

    // Calculate the sum of the first window
    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }

    maxSum = currentSum;

    // Slide the window
    for (let i = k; i < arr.length; i++) {
        currentSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Example Usage
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9 (5 + 1 + 3)
