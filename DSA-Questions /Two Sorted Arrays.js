function findCommonElements(arr1, arr2) {
    let left = 0;                // Pointer for array A (starts from left)
    let right = arr2.length - 1; // Pointer for array B (starts from right)
    let count = 0;               // Counter for common elements

    // Traverse both arrays to find common elements
    while (left < arr1.length && right >= 0) {
        if (arr1[left] === arr2[right]) {
            count++;
            left++;  // Move left pointer to the right
            right--; // Move right pointer to the left
        } else if (arr1[left] < arr2[right]) {
            left++; // Move left pointer to the right
        } else {
            right--; // Move right pointer to the left
        }
    }

    return count;
}

// Example usage:
let A = [1, 2, 2, 3, 4, 5];
let B = [4, 4, 3, 2, 1, 1];

let commonCount = findCommonElements(A, B);
console.log("Number of common elements:", commonCount); // Output: 4
