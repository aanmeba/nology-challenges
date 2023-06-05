console.log(typeof 15); // Prediction: number
console.log(typeof 5.5); // Prediction: number

// Type conversion went wrong, couldn't convert to a number
console.log(typeof NaN); // Prediction: NaN - number

console.log(typeof "hello"); // Prediction: string
console.log(typeof true); // Prediction: boolean

// != / !== not equal to
console.log(1 != "1"); // false
console.log(1 !== "1"); // true - check the data type first
console.log(2 == "2"); // true
console.log(2 === "2"); // false
console.log(typeof (1 != 2)); // Prediction: boolean

console.log(typeof ("hamburger" + "s")); // Prediction: string
console.log(typeof ("hamburgers" - "s")); // Prediction: NaN - number
console.log(typeof ("1" + "3")); // Prediction: number 👉 string
console.log(typeof ("1" - "3")); // Prediction: NaN - number 👉 number
console.log(typeof ("johnny" + 5)); // Prediction: string
console.log(typeof ("johnny" - 5)); // Prediction: string 👉 NaN - number
console.log(typeof (99 * "luftbaloons")); // Prediction: NaN - number
