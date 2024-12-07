function maxLengthSubarray(arr, target) {
    let left = 0;
    let maxLength = 0;
    let currentSum = 0;

    for (let right = 0; right < arr.length; right++) {
        currentSum += arr[right];

        while (currentSum > target) {
            currentSum -= arr[left];
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example Usage
console.log(maxLengthSubarray([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 8)); // Output: 3 ([1, 7])
