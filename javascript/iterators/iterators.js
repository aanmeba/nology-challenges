/******** challenges - 1
 * You have an array of names all in lowercase
 * you want a new array with all names but uppercase
 */

const names = ["kate", "ella", "john", "daniel"];
const namesInUpperCase = names.map((name) => name.toUpperCase());

console.log(namesInUpperCase, "-- names");

/******** challenges - 2
 * You have an array of numbers,
 * you want a new array with each number decremented by 5
 */

const numbers = [1, 2, 3, 4, 5, 6];
const numbersMinusFive = numbers.map((num) => num - 5);

console.log(numbersMinusFive, "-- numbers");
