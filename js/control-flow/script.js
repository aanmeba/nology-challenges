// Challenge: Comparing Numbers

let x, y;
// (x = 5), (y = 5);
// (x = 15), (y = 5);
(x = 15), (y = 25);

if (x > y) console.log("x is greather than y");
else if (x < y) console.log("x is smaller than y");
else console.log("x is equal to y");

// Challenge: User Input Type
let userInput;
// userInput = 10;
// userInput = "hey"
// userInput = false

// if (typeof userInput === "number") console.log(userInput ** 2);
// else if (typeof userInput === "string") console.log(userInput);
// else console.log("Invalid input");

userInput = prompt("enter your input");
// do we treat "true", "false", "null", "undefined" as strings or numbers?

if (parseInt(userInput)) {
  console.log(userInput ** 2);
} else if (
  userInput === "true" ||
  userInput === "false" ||
  userInput === "undefined" ||
  userInput === "null"
) {
  console.log("invalid input");
} else {
  console.log(userInput);
}
