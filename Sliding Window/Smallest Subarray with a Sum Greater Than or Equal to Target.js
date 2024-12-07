function smallestSubarrayWithSum(arr, target) {
    let left = 0;
    let minLength = Infinity;
    let currentSum = 0;

    for (let right = 0; right < arr.length; right++) {
        currentSum += arr[right];

        while (currentSum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            currentSum -= arr[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

// Example Usage
console.log(smallestSubarrayWithSum([2, 3, 1, 2, 4, 3], 7)); // Output: 2 ([4, 3])
