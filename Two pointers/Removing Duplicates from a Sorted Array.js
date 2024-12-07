function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1; // Length of the unique elements
}

// Example Usage
const nums = [1, 1, 2, 2, 3];
console.log(removeDuplicates(nums)); // Output: 3
console.log(nums.slice(0, 3));       // Output: [1, 2, 3]
