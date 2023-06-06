// Challenge: Comparing Numbers

const x = 13,
  y = 5;

if (x > y) console.log("x is greather than y");
else if (x < y) console.log("x is smaller than y");
else console.log("x is equal to y");

// Challenge: User Input Type
const userInput = true;

if (typeof userInput === "number") {
  console.log(userInput ** 2);
} else if (typeof userInput === "string") {
  console.log(userInput);
} else {
  console.log("Invalid input");
}
