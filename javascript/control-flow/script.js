/***
 * Challenge: Comparing Numbers
 * ***/

let x, y;
// (x = 5), (y = 5);
// (x = 15), (y = 5);
(x = 15), (y = 25);

if (x > y) console.log("x is greather than y");
else if (x < y) console.log("x is smaller than y");
else console.log("x is equal to y");

/***
 * Challenge: User Input Type
 * ***/

let userInput;
userInput = 10;
// userInput = "hey"
// userInput = false

// if (typeof userInput === "number") console.log(userInput ** 2);
// else if (typeof userInput === "string") console.log(userInput);
// else console.log("Invalid input");

// userInput = prompt("enter your input");
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

/***
 * Challenge: Tell me the day!
 * ***/

let day = "monday";
switch (day) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 7:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Oops! That's not a valid day");
}

/***
 * Challenge: Eye Colour
 * ***/

let parent1 = "green",
  parent2 = "green";

/** Solution 1 - if - my original solution **/

// if (parent1 === "brown" && parent2 === "brown") {
//   console.log(
//     `Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown is 75%, green is 18.75% and blue eyes is 6.25%`
//   );
// } else if (parent1 === "green" && parent2 === "brown") {
//   console.log(
//     `Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown is 50%, green is 37.5% and blue eyes is 12.5%`
//   );
// } else if (parent1 === "blue" && parent2 === "brown") {
//   console.log(
//     `Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown is 50%, green is 0% and blue eyes is 50%`
//   );
// } else if (parent1 === "green" && parent2 === "green") {
//   console.log(
//     `Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown is less than 1%, green is 75% and blue eyes is 25%`
//   );
// } else if (parent1 === "green" && parent2 === "blue") {
//   console.log(
//     `Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown is 0%, green is 50% and blue eyes is 50%`
//   );
// } else if (parent1 === "blue" && parent2 === "blue") {
//   console.log(
//     `Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown is 0%, green is 1% and blue eyes is 99%`
//   );
// }

/** Solution 2 - if **/

let blue, brown, green;
let child;

// if (parent1 === "brown" && parent2 === "brown") {
//   brown = 75;
//   green = 18.75;
//   blue = 6.25;
// } else if (parent1 === "green" && parent2 === "brown") {
//   brown = 50;
//   green = 37.5;
//   blue = 12.5;
// } else if (parent1 === "blue" && parent2 === "brown") {
//   brown = 50;
//   green = 0;
//   blue = 50;
// } else if (parent1 === "green" && parent2 === "green") {
//   brown = "less than 1";
//   green = 75;
//   blue = 25;
// } else if (parent1 === "green" && parent2 === "blue") {
//   brown = 0;
//   green = 50;
//   blue = 50;
// } else if (parent1 === "blue" && parent2 === "blue") {
//   brown = 0;
//   green = 1;
//   blue = 99;
// }

console.log(
  `Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown is ${brown}%, green is ${green}% and blue eyes is ${blue}%`,
  "--- solution 2"
);

/** Solution 3 - switch **/

const parents = parent1 + parent2;

switch (parents) {
  case "brownbrown":
    brown = 75;
    green = 18.75;
    blue = 6.25;
    child = brown;
    break;
  case "greenbrown":
  case "borwngreen":
    brown = 50;
    green = 37.5;
    blue = 12.5;
    child = brown;
    break;
  case "bluebrown":
  case "brownblue":
    brown = 50;
    green = 0;
    blue = 50;
    child = brown;
    break;
  case "greengreen":
    brown = "less than 1";
    green = 75;
    blue = 25;
    child = green;
    break;
  case "greenblue":
  case "bluegreen":
    brown = 0;
    green = 50;
    blue = 50;
    child = green;
    break;
  case "blueblue":
    brown = 0;
    green = 1;
    blue = 99;
    child = blue;
  default:
    console.log("invalid combination");
}

console.log(
  `Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown is ${brown}%, green is ${green}% and blue eyes is ${blue}%`,
  "--- solution 3"
);

/** Solution 2 - Objects **/

// const chart = {
//   "brown+brown": {
//     brown: 75,
//     green: 18.75,
//     blue: 6.25,
//   },
//   "green+brown": {
//     brown: 50,
//     green: 37.5,
//     blue: 12.5,
//   },
//   "blue+brown": {
//     brown: 50,
//     green: 0,
//     blue: 50,
//   },
//   "green+green": {
//     brown: "<1",
//     green: 75,
//     blue: 25,
//   },
//   "green+blue": {
//     brown: 0,
//     green: 50,
//     blue: 50,
//   },
//   "blue+blue": {
//     brown: 0,
//     green: 1,
//     blue: 99,
//   },
// };

// const key = parent1 + "+" + parent2;

// if (chart.hasOwnProperty(key)) {
//   console.log(
//     `Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown is ${chart[key].brown}%, green is ${chart[key].green}% and blue eyes is ${chart[key].blue}%`
//   );
// } else {
//   console.log("Invalid eye colours combination");
// }

/***
 * Bonus
 * ***/

// let child = "green";

switch (child) {
  case "brown":
    console.log("favourite eye colour");
    break;
  case "blue":
    console.log("less favourite eye colour");
    break;
  case "green":
    console.log("least favourite eye colour");
    break;
  default:
    console.log("Oh that's great colour!");
}
