// Swap keys with values

const translate = {
  apple: "jablko",
  pear: "gruszka",
  strawberry: "truskawka",
};

/* const newObj = {
  jablko: "apple",
  gruszka: "pear",
  truskawka: "strawberry"
} */

const translated = Object.entries(translate).reduce((acc, curr) => {
  const [key, value] = curr;
  acc[value] = key;
  return acc;
}, {});

console.log(translated);
