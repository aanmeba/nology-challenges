/*** Challenge: Sum of n ***/
// MVP:
// Create a function with a for loop that will add all the numbers up to n

// You should create a variable to set the upper limit of your loop
// Your loop should increment by 1 on each iteration
// Your loop should print the final result

// ```
// sum(10) => 55
// ```

const sum = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  console.log(sum);
};

sum(10);

/*** Challenge: Write a shopping list ***/
// MVP:
// Create a function with a for loop that will add numbers to your shopping list

// Store the following array in a variable
// Your loop should iterate through every value in the array
// Your loop should print a shopping list with the number and the name of the item

// ```
// ['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];
// =>
// // In Console

// 1. milk
// 2. watermelon
// 3. eggs
// 4. soap
// 5. butter
// 6. apples
// 7. ice-cream
// ```

const shoppingList = [
  "milk",
  "watermelon",
  "eggs",
  "soap",
  "butter",
  "apples",
  "ice-cream",
];

const printShoppingList = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${i + 1}. ${arr[i]}`);
  }
};

printShoppingList(shoppingList);

/*** Challenge: Capitalizing Odd Positioned Letters ***/

// MVP
// Create a variable with a string of your choice
// Loop through the letters in this string and build a new string
// If the current index is odd, capitalize the letter before adding it to the new string
// Bonus
// If the current index is even increment the letter
// E.g: a becomes b, d becomes e, t becomes u
// Final: z becomes a

// const string = "hello world";
const string = "zzzzz";
let newString = "";

for (let i = 0; i < string.length; i++) {
  // if (i % 2 !== 0) {
  // 💡💡💡💡💡
  if (i % 2) {
    newString += string.charAt(i).toUpperCase();
  } else {
    if (string[i].toLowerCase() === "z") {
      newString += "a";
    } else {
      const newChar = string.charCodeAt(i) + 1;
      newString += String.fromCharCode(newChar);
    }
  }
}

console.log(newString);

/*** Challenge: Removing Vowels ***/

// MVP
// Create a variable with a string of your choice
// Loop through the letters in this and build a new string
// The new strings should be the same as the input with the vowels missing

// ```
// E.g: calum => clm, rachel => rchl, martyna => mrtyn
// ```

// Bonus
// Keep vowels in the new strings if they are succeeded by the letters l, m, or r

// ```
// E.g: calum => calum, rachel => rchel, martyna => martyn
// ```

// const calum = "calum";
// const rachel = "rachel";
// const martyna = "martyna";

const vowels = ["a", "e", "i", "o", "u"];
const letters = ["l", "m", "r"];

const removeVowels = (str) => {
  let newString = "";

  for (let i = 0; i < str.length; i++) {
    if (
      vowels.indexOf(str.charAt(i)) === -1 ||
      letters.indexOf(str.charAt(i + 1)) !== -1
    ) {
      newString += str.charAt(i);
    }
  }
  console.log(newString);
};
removeVowels("calum");
removeVowels("rachel");
removeVowels("martyna");

/*** Challenge: Loop through an array backwards ***/

// Console.log() every element from the array

const backwards = [1, 2, 3, 4, 5];

for (let i = backwards.length - 1; i >= 0; i--) {
  console.log(backwards[i]);
}
