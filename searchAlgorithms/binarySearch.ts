/**
 * BINARY SEARCH
 * returns the index position of the target, else returns -1 (not found)
 */

const binarySearch = (arr: number[], key: number): number => {
  let firstElementIndex = 0;
  let lastElementIndex = arr.length - 1;

  while (firstElementIndex <= lastElementIndex) {
    const midpointIndex = Math.floor(
      (firstElementIndex + lastElementIndex) / 2
    );

    if (arr[midpointIndex] === key) {
      return midpointIndex;
    } else if (arr[midpointIndex] < key) {
      firstElementIndex = midpointIndex + 1;
    } else {
      lastElementIndex = midpointIndex - 1;
    }
  }

  return -1;
};

//verify results

const verifyBinary = (index: number): string => {
  return index === -1 ? `Key not found` : `Key found at index: ${index}`;
};

const numbersBinary = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultsBinary = binarySearch(numbersBinary, 9);

console.log(verifyBinary(resultsBinary));
