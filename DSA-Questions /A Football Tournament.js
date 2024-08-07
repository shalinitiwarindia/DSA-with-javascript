function generateKeyValuePair(array) {
    const keyValuePair = {};
    array.forEach(element => {
        if (keyValuePair[element]) {
            keyValuePair[element]++;
        } else {
            keyValuePair[element] = 1;
        }
    });
    return keyValuePair;
}

function aFootballTournament(array) {
    const keyValuePair = generateKeyValuePair(array);
    let max = 0;
    let ans = '';

    for (const key in keyValuePair) {
        if (keyValuePair[key] > max) {
            max = keyValuePair[key];
            ans = key;
        }
    }

    return ans;
}

// Example usage:
const teams = ["TeamA", "TeamB", "TeamA", "TeamC", "TeamB", "TeamA"];
const mostFrequentTeam = aFootballTournament(teams);
console.log(mostFrequentTeam); // Output: TeamA
