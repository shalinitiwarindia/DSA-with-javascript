function countAnagrams(s, p) {
    const result = [];
    const pCount = {};
    const sCount = {};
    let matches = 0;

    for (const char of p) {
        pCount[char] = (pCount[char] || 0) + 1;
    }

    const requiredMatches = Object.keys(pCount).length;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        sCount[char] = (sCount[char] || 0) + 1;

        if (pCount[char] && sCount[char] === pCount[char]) {
            matches++;
        }

        if (right >= p.length - 1) {
            if (matches === requiredMatches) {
                result.push(right - p.length + 1);
            }

            const leftChar = s[right - p.length + 1];
            if (pCount[leftChar] && sCount[leftChar] === pCount[leftChar]) {
                matches--;
            }
            sCount[leftChar]--;
        }
    }

    return result;
}

// Example Usage
console.log(countAnagrams("cbaebabacd", "abc")); // Output: [0, 6]
