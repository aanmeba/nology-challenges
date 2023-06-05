console.log("*** Working with ages ***");
const age = 10;
console.log((age += 10));
console.log((age -= 7));
console.log((age *= 11));

console.log("*** Calculating Moon Rotations ***");
const earthDays = 55;
const daysToRotate = 27.3;
const numOfRotations = Math.floor(earthDays / daysToRotate);
console.log(numOfRotations);

console.log("*** Calculating Moon Orbits ***");
const daysToOrbit = 27.3;
const numOfOrbits = Math.floor(earthDays / daysToOrbit);
console.log(numOfOrbits);
