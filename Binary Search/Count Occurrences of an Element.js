function countOccurrences(arr, target) {
  const first = firstOccurrence(arr, target);
  if (first === -1) return 0; // Target not found

  const last = lastOccurrence(arr, target);
  return last - first + 1;
}

// Example
const arr4 = [1, 2, 2, 2, 3];
console.log(countOccurrences(arr4, 2)); // Output: 3
console.log(countOccurrences(arr4, 4)); // Output: 0

