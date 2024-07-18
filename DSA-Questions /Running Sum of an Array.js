function runningSum(nums) {
    const result = [];
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result.push(sum);
    }

    return result;
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const result = runningSum(inputArray);
console.log(result); // Output: [1, 3, 6, 10, 15]
