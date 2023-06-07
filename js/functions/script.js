/***
 * Challenge: Calculating Moon Orbits
 * ***/

const moonOrbits = (days) => (days / 27.322).toFixed(3);
console.log(moonOrbits(54));
console.log(moonOrbits(365));

// Solution - 2
// const moonOrbits2 = (days) => {
//   const totalOrbits = days / 27;
//   return days % 27 === 0 ? totalOrbits : totalOrbits.toFixed(3);
// };

/***
 * Challenge: Working with Circles
 * ***/

const circleArea = (radius) => (radius ** 2 * Math.PI).toFixed(2);
const circlePerimeter = (radius) => (2 * radius * Math.PI).toFixed(2);

console.log(circleArea(10));
console.log(circlePerimeter(10));

/***
 * Challenge: Years to Days & Seconds
 * ***/

const ageInDays = (age) => age * 365;
const ageInSeconds = (age) => age * (365 * 24 * 60 * 60);

console.log(ageInDays(32));
console.log(ageInSeconds(32));

/***
 * Challenge: Return the Remainder from Two Numbers
 * ***/

const remainder = (num1, num2) => num1 % num2;

console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));
console.log(remainder(5, 5));

/***
 * Challenge: Basketball Points
 * ***/

const pointsCalculator = (pointer2, pointer3) => pointer2 * 2 + pointer3 * 3;

console.log(pointsCalculator(2, 3));

/***
 * Challenge: Less Than 100?
 * ***/

const lessThan100 = (num1, num2) => num1 + num2 < 100;

console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));
