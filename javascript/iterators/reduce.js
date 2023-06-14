// given an array of character codes, convert the codes to letters and reduce it to a single string

const arrOfCodes = [114, 101, 100, 117, 99, 101];

const letters = arrOfCodes.reduce(
  (acc, curr) => acc + String.fromCharCode(curr),
  ""
);

console.log(letters, "-- letters");

// given an array of letters, reduce them to get the sum of character codes
const lettArr = ["c", "h", "e", "e", "s", "e"];

const codes = lettArr.reduce((acc, curr) => acc + curr.charCodeAt(), 0);

console.log(codes, "-- codes");

// use reduce to filter an array to only get numbers greater than 10

const numsArr = [1, 345, 545, 2, 5, 7, 907];
const filteredNums = numsArr.reduce((acc, curr) => {
  if (curr > 10) acc.push(curr);
  return acc;
}, []);

console.log(filteredNums, "-- filteredNums");

// use reduce to create an array of numbers (use numsArr) to the power of 2

const poweredNums = numsArr.reduce((acc, curr) => {
  acc.push(curr ** 2);
  return acc;
}, []);

console.log(poweredNums, "-- poweredNums");
