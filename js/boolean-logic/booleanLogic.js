console.log(2 == "2"); // true
console.log(2 === 2); // true
console.log(2 === "2"); // false - different type

console.log("2" + 3 == 23); // true - string concat
console.log("2" + 3 === 5); // false - string concat

console.log(10 % 3); // true - has value 1
console.log(10 % 3 === 1); // true
console.log((100 % 7) % 5); // true - has value 2
console.log((100 % 7) % 5 !== 0); // true - has some remainder
console.log((100 % 7) % 9 == 2); // true - 2%9 = 2
console.log(!(10 % 2)); // true - !(0)
console.log(!!!!((10 % 7) % 3)); // !!!!(0) - false
console.log(10 % 3 === -1 % 2); // (1 === -1) - false
console.log((892783 != "89278" + 3) == 0);
// (892783 != "892783")
// (false == 0)
// false - 0 isn't false, it's falsy value?

console.log(true && false); // false
console.log(false || true); // true
console.log(true || false); // true
console.log(true || false); // true
console.log(true || false + true); // true

console.log(true * false && false + true);
// true - 1 / false - 0
// 0 && 1
// 0 (falsy)

console.log(10 && 123 && -1 && 3); // 3
console.log(10 && 123 && 0 && 3); // 0 - 0 is falsy value
console.log((10 && (123 || "") && parseInt("Roisin")) || 23 / 23 - 1);
// ((10 && 123 && NaN) || -1)
// (NaN || -1)
// -1 (truthy)
console.log(3 && "Calum" && ("" || 26));
// (3 && "Calum" && 26)
// 26
console.log(3 && "Remi" && (null || 86 * 0 || ("" + 1 && "Cat" + "Dog")));
// (3 && "Remi" && (null || 0 || "1" && "CatDog"))
// (3 && "Remi" && ("CatDog"))
// "CatDog"
