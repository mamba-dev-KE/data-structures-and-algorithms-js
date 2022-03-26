const arr: number[] = [1, 20, 3, 4, 5, 6, 7, 8, 9];

const searchItem = 1;

console.log("indexOf:", arr.indexOf(searchItem)); // returns first index where an element is found

console.log("includes:", arr.includes(searchItem)); // returns a boolean depending on whether an element is found

console.log(
  "find:",
  arr.find((item) => item === searchItem)
); // returns the first instance of the element that satisfies given condition

console.log(
  "filter:",
  arr.filter((item, index) => item === searchItem)
); // returns a new array with the elements that meet test implemented in callback function
