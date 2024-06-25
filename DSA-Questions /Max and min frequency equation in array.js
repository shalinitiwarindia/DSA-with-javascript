function minMAx(N,arr){

    // Object to store frequency of each element
    let frequency = {};

    // Calculate frequency of each element in the array
    arr.forEach(function(element) {
        if (frequency[element] === undefined) {
            frequency[element] = 1;
        } else {
            frequency[element]++;
        }
    });

    // Find maximum and minimum frequency
    let maxFrequency = -Infinity;
    let minFrequency = Infinity;

    for (let key in frequency) {
        if (frequency.hasOwnProperty(key)) {
            if (frequency[key] > maxFrequency) {
                maxFrequency = frequency[key];
            }
            if (frequency[key] < minFrequency) {
                minFrequency = frequency[key];
            }
        }
    }

    console.log(15*(minFrequency)+2*(maxFrequency));
}

    
