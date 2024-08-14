
module.exports = function towelSort(matrix) {
    let newMatrix = [];
    if (!matrix) {
        return newMatrix;
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            newMatrix = newMatrix.concat(matrix[i]);
        } else {
            newMatrix = newMatrix.concat(matrix[i].reverse());
        }
    }
    return newMatrix;
}
