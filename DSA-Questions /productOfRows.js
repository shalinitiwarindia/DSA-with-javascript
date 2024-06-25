function productOfRows(N,M,arr){
    
    // Initialize an array to store products of each row
    let products = [];

    // Iterate through each row in the matrix
    for (let i = 0; i < arr.length; i++) {
        let product = 1; // Initialize product for the current row

        // Iterate through each element in the current row
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j]; // Calculate product of row elements
        }

        products.push(product); // Store the product for the current row
    }

    console.log(products); // Return array of row products
}

