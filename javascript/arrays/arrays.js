/*** Challenge: Listing Hobbies ***/

const hobbies = ["running", "bouldering", "skating"];
console.log("first hobbyy: ", hobbies[0]);

const firstHobby = hobbies.shift();
const lengthOfHobbies = hobbies.length;
console.log(firstHobby, lengthOfHobbies); // running, 2

hobbies.push("cooking");
console.log(hobbies[lengthOfHobbies - 1]); // skating 💡
console.log(hobbies[hobbies.length - 1]); // cooking 💡

console.log(`My hobbies are: ${hobbies.join(", ")}`);

/*** Challenge: Grocery Lists ***/

const itemsToBuy = ["apple", "pear", "papaya", "mango", "banana"];
console.log(itemsToBuy.join("|"));
