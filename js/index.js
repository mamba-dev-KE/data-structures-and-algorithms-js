"use strict";
/**
 * LINEAR SEARCHINH
 * returns the index position of the target, else returns -1 (not found)
 */
const linearSearch = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i;
        }
    }
    return -1;
};
// verify results
const verify = (index) => {
    return index === -1 ? `Key not found` : `Key found at position ${index}`;
};
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const results = linearSearch(numbers, 10);
console.log(verify(results));
