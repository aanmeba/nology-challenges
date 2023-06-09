/*** Challenge: Listing Hobbies ***/

// Create an array with 3 of your hobbies
const hobbies = ["running", "bouldering", "skating"];

// Print in the console the first hobby in the array
console.log(hobbies[0]);

// Remove that first hobby from the array and store that hobby in a variable
const firstHobby = hobbies.shift();

// Store the length of the array in a variable
const lengthOfHobbies = hobbies.length;

// Add another hobby at the end of the array
hobbies.push("cooking");

// Print that last hobby in the console
console.log(hobbies[lengthOfHobbies - 1]);

// Bonus: Join all your hobbies in a single string each hobby being comma separated (i.e. "My hobbies are: hobby1, hobby2, hobby2")
console.log(`My hobbies are: ${hobbies.join(", ")}`);

/*** Challenge: Grocery Lists ***/

// Create an array containing 5 grocery items you often buy
const itemsToBuy = ["apple", "pear", "papaya", "mango", "banana"];

// Log this list to the console, make sure the output is pipe delimited
console.log(itemsToBuy.join("|"));
