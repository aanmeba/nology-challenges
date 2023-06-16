/******** # Lad in the pub ********
 * 1. Create a function that takes 3 parameters (age, country level of drunk) and returns a string or a boolean that says if someone can enter the pub or not (drunk above 3 is too much)
 *
 * 2. Add a script.js file to the provided code and add the following functionality:
 * -   The function should be triggered on form submit.
 * -   a message should be rendered under the form "Come in and have a beer" / "You can't have a beer"
 * -   If the person is allowed to enter the pub, the colour of the bottle and the button background should change to green.
 * -   If the person is not allowed to enter the pub, the bottle and the message div background should be red.
 * -   Only one message should be rendered, if there is already a message on the page, it should be removed when the user clicks the button again and a new one should be displayed.
 *
 * BONUS: Familiarise yourself with the following docs: https://developer.mozilla.org/en-US/docs/Web/API/FormData and implement the challenge using FormData
 */

// I need to write the logic for this app
// a function that takes in 3 parameters
// returns a boolean

// age >= 21 for USA
// rest of countries >= 18
// level of drunk <= 3 to be fine

const checkIfAllowed = (age, country, drunk) => {
  // uk, poland, aus - 18 or older && usa - 21 or older

  if (age < 18) return false;
  if (age < 21 && country === "USA") return false;
  if (drunk >= 3) return false;

  return true;
  // return age < 18 || (age < 21 && country === "USA") || drunk >= 3;

  // Other solution
  // return (
  //   (age >= 21 && drunk <= 3) || (age >= 18 && drunk <= 3 && country !== "USA")
  // );
};

console.log(checkIfAllowed(21, "UK", 2)); // true
console.log(checkIfAllowed(18, "UK", 2)); // true
console.log(checkIfAllowed(18, "USA", 2)); // false
console.log(checkIfAllowed(12, "USA", 2)); // false
console.log(checkIfAllowed(32, "USA", 4)); // false

// when do I want to call this function?
// when the user submits the form

const form = document.querySelector(".form");
const submitBtn = document.querySelector("#btn");
const messageDiv = document.querySelector("#message");
const beerImg = document.querySelector("img");

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   // Remove the previous message & its background
//   const newMessage = document.querySelector(".new");
//   const successOrFailure = messageDiv.classList[1];
//   if (newMessage) newMessage.remove();
//   if (successOrFailure && messageDiv.className.includes("message--"))
//     messageDiv.classList.remove(successOrFailure);

//   const formData = new FormData(form);
//   const { age, country, drunk } = Object.fromEntries(formData);

//   const isAllowed = checkIfAllowed(age, country, drunk);
//   const img = `./assets/${isAllowed ? "green_beer" : "red_beer"}.svg`;
//   const message = isAllowed
//     ? "Come in and have a beer"
//     : "You can't have a beer";

//   const para = document.createElement("p");
//   const textNode = document.createTextNode(message);
//   para.classList.add("new");
//   para.appendChild(textNode);
//   messageDiv.appendChild(para);

//   beerImg.src = img;
//   messageDiv.classList.add(`message--${isAllowed ? "success" : "failure"}`);
// });

/**
 * Other solution - code along
 * */

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // grab the values of the inputs inside the form
  // I could select individual inputs
  // input.value

  const formData = new FormData(form);
  console.log(formData); // check which methods I can use

  const age = formData.get("age");
  const country = formData.get("country");
  const drunk = formData.get("drunk");

  // based on the values, I need to decide what message I want
  let messageStr = "";
  const allowed = checkIfAllowed(age, country, drunk);

  allowed ? (messageStr = "Come in") : (messageStr = "Go home");

  // remove the paragraph from the div if it's there to make room for the new one
  // console.log(messageDiv.children);
  if (messageDiv.children.length > 0)
    messageDiv.removeChild(document.querySelector("#msg"));

  // create a p tag to add to the page
  const newP = document.createElement("p");
  newP.id = "msg";

  // create a text node from messageStr for the p tag
  const text = document.createTextNode(messageStr);

  // tell the text to go inside my paragraph
  newP.appendChild(text);

  // tell the p tag where to go on the page
  messageDiv.appendChild(newP);

  // clear the form
  form.reset();

  // based on the values, I need to decide what styling I want
  if (allowed) {
    if (messageDiv.classList.contains("message--failure")) {
      messageDiv.classList.remove("message--failure");
    }
    document.querySelector("img").src = "./assets/green_beer.svg";
    messageDiv.classList.add("message--success");
  } else {
    if (messageDiv.classList.contains("message--success")) {
      messageDiv.classList.remove("message--success");
    }
    document.querySelector("img").src = "./assets/red_beer.svg";
    messageDiv.classList.add("message--failure");
  }
});
