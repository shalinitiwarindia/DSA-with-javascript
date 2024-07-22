function differenceOfK(arr, K) {
    let first = 0;
    let second = 0;

    while (first < arr.length && second < arr.length) {
        let temp = arr[second] - arr[first];
        
        // Check if the difference is K and indices are not the same
        if (temp == K && first != second) {
            return "Yes";
        }
        
        // If difference is less than K, move the second pointer to increase the difference
        if (temp < K) {
            second++;
        } else {
            // If difference is greater than or equal to K, move the first pointer to decrease the difference
            first++;
        }
    }
    
    return "No";
}

// Test Case 1
let A1 = [1, 2, 3, 4, 5];
let K1 = 3;
console.log(differenceOfK(A1, K1)); // Output: true

// Test Case 2
let A2 = [1, 2, 3, 4, 5];
let K2 = 8;
console.log(differenceOfK(A2, K2)); // Output: false
