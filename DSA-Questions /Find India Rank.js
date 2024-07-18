function findIndiaRank(countries) {
    // Find the index of 'India' in the array
    const rank = countries.indexOf('India');
    
    // If 'India' is found in the array, return its rank (index + 1)
    // Otherwise, return a message indicating that 'India' is not in the list
    if (rank !== -1) {
        return rank + 1;
    } else {
        return 'India is not in the list';
    }
}

// Example usage:
const countryRankings = [
    'USA', 'China', 'Japan', 'Germany', 'India', 'UK', 'France', 'Italy', 'Canada', 'South Korea'
];

const indiaRank = findIndiaRank(countryRankings);
console.log(indiaRank); // Output: 5
