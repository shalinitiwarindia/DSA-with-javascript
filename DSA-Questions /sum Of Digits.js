function processInput(input) {
    const lines = input.trim().split('\n');
    const results = [];

    for (let i = 1; i < lines.length; i += 2) {
        const numbers = lines[i + 1].split(' ').map(Number);
        const sumOfSums = numbers.reduce((sum, num) => sum + sumOfDigits(num), 0);
        results.push(sumOfSums);
    }

    return results;
}

function sumOfDigits(number) {
    return number.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

// Example usage:
const input = `2
5
12 14 16 17 29
6
1 2 3 4 5 51`;

const results = processInput(input);
console.log(results.join(' ')); // Output: 34 21
