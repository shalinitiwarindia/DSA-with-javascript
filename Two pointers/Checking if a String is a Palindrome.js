function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false; // Characters do not match
        }
        left++;
        right--;
    }
    return true; // The string is a palindrome
}

// Example Usage
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false
