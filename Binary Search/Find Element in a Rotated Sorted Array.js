function searchInRotatedArray(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;

    // Check if left half is sorted
    if (arr[start] <= arr[mid]) {
      if (target >= arr[start] && target < arr[mid]) {
        end = mid - 1; // Search in the left half
      } else {
        start = mid + 1; // Search in the right half
      }
    } else {
      // Right half is sorted
      if (target > arr[mid] && target <= arr[end]) {
        start = mid + 1; // Search in the right half
      } else {
        end = mid - 1; // Search in the left half
      }
    }
  }

  return -1; // Target not found
}

// Example
const arr5 = [4, 5, 6, 7, 0, 1, 2];
console.log(searchInRotatedArray(arr5, 0)); // Output: 4
console.log(searchInRotatedArray(arr5, 3)); // Output: -1
