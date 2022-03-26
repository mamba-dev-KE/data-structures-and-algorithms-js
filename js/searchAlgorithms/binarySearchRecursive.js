"use strict";
/**
 * BINARY SEARCHING RECURSIVE
 * returns the index position of the target, else returns -1 (not found)
 */
const binarySearchRecursive = (arr, key) => {
    if (!arr.length) {
        return false;
    }
    else {
        let midpointIndex = Math.floor(arr.length / 2);
        if (arr[midpointIndex] === key) {
            return true;
        }
        else if (arr[midpointIndex] < key) {
            const subArr = arr.slice(midpointIndex + 1);
            return binarySearchRecursive(subArr, key);
        }
        else {
            const subArr = arr.slice(0, midpointIndex);
            return binarySearchRecursive(subArr, key);
        }
    }
};
// verify results
const verifyBinaryRecursive = (result) => {
    return `Target found: ${result}`;
};
const numbersBinaryRecursive = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultBinaryRecursive = binarySearchRecursive(numbersBinaryRecursive, 19);
console.log(verifyBinaryRecursive(resultBinaryRecursive));
