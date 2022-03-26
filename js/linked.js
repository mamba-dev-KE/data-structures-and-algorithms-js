"use strict";
const arr = [1, 20, 3, 4, 5, 6, 7, 8, 9];
const searchItem = 1;
console.log("indexOf", arr.indexOf(searchItem));
console.log("includes", arr.includes(searchItem));
console.log("find", arr.find((item) => item === searchItem));
console.log("filter", arr.filter((item, index) => item === searchItem));
