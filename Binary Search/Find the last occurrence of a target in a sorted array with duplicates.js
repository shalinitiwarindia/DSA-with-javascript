function lastOccurrence(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      result = mid; // Record the index
      start = mid + 1; // Continue searching in the right half
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return result;
}

// Example
const arr3 = [1, 2, 2, 2, 3];
console.log(lastOccurrence(arr3, 2)); // Output: 3
console.log(lastOccurrence(arr3, 4)); // Output: -1
