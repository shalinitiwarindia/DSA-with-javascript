function generateKeyValuePair(array) {
    const keyValuePair = {};
    array.forEach(element => {
        if (keyValuePair[element]) {
            keyValuePair[element]++;
        } else {
            keyValuePair[element] = 1;
        }

       

// Example usage:
const teams = ["TeamA", "TeamB", "TeamA", "TeamC", "TeamB", "TeamA"];
const mostFrequentTeam = aFootballTournament(teams);
console.log(mostFrequentTeam); // Output: TeamA
