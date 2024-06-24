function transposeTheMatrix(N, M, matrix){
  
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Initialize a new transposed matrix
    let transposedMatrix = [];

    // Loop through each column in the original matrix
    for (let j = 0; j < M; j++) {
        // Initialize a new row in the transposed matrix
        transposedMatrix[j] = [];

        // Loop through each row in the original matrix
        for (let i = 0; i < N; i++) {
            // Swap the elements to transpose the matrix
            transposedMatrix[j][i] = matrix[i][j];
        }
    }

    console.log(transposedMatrix);
}
