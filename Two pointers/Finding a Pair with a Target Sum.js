function findPairWithSum(arr, target) {
    arr.sort((a, b) => a - b); // Sort the array
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return [arr[left], arr[right]];
        } else if (sum < target) {
            left++; // Move the left pointer to increase the sum
        } else {
            right--; // Move the right pointer to decrease the sum
        }
    }
    return null; // No such pair found
}

// Example Usage
console.log(findPairWithSum([1, 3, 2, 4, 5], 6)); // Output: [1, 5]
