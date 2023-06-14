/*** Challenge: Sum of n
 * MVP
 * Create a variable that contains your age
 * Add 10 to your age variable and log the output to the console
 * Subtract 7 from your age variable and log the output to the console
 * Multiple your age variable by 11 and log the output to the console
 * ***/

let age = 10;
console.log((age += 10));
console.log((age -= 7));
console.log((age *= 11));

/*** Challenge: Calculating Moon Rotations
 * MVP
 * Create two variables
 * The first for the number of earth days. (You can choose any number of days)
 * One to hold the number of earth days it takes for the moon to rotate.
 * Log the number of rotations of the moon given the number of earth days you specified
 * ***/

const earthDays = 55;
const daysToRotate = 27.3;
const numOfRotations = Math.floor(earthDays / daysToRotate);
console.log(numOfRotations);

/*** Challenge: Calculating Moon Orbits
 * MVP
 * Create another variable to store the number of earth days it takes for the moon to orbit the earth
 * Log the number of orbits the moon can do, given the number of earth days
 *
 * Create a new branch in you nology-challenges
 * Open a pull request to main once challenge is completed
 * Review each others pull requests
 * ***/

const daysToOrbit = 27.3;
const numOfOrbits = Math.floor(earthDays / daysToOrbit);
console.log(numOfOrbits);
