function countOccurrences(arr, target) {
  const first = firstOccurrence(arr, target);
  if (first === -1) return 0; // Target not found

