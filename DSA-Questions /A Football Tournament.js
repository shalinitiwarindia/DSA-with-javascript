function generateKeyValuePair(array) {
    const keyValuePair = {};
    array.forEach(element => {
        if (keyValuePair[element]) {
            keyValuePair[element]++;
        } else {
            keyValuePair[element] = 1;
        }

       

