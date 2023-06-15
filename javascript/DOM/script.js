// # Lad in the pub

// 1. Create a function that takes 3 parameters (age, country level of drunk) and returns a string or a boolean that says if someone can enter the pub or not (drunk above 3 is too much)

// 2. Add a script.js file to the provided code and add the following functionality:

// -   The function should be triggered on form submit.
// -   a message should be rendered under the form "Come in and have a beer" / "You can't have a beer"
// -   If the person is allowed to enter the pub, the colour of the bottle and the button background should change to green.
// -   If the person is not allowed to enter the pub, the bottle and the message div background should be red.
// -   Only one message should be rendered, if there is already a message on the page, it should be removed when the user clicks the button again and a new one should be displayed.

// BONUS: Familiarise yourself with the following docs: https://developer.mozilla.org/en-US/docs/Web/API/FormData and implement the challenge using FormData

// const inputAge = document.querySelector("#age");
// const inputCountry = document.querySelector("#country");
// const inputDrunk = document.querySelector("#drunk");

const form = document.querySelector(".form");
const submitBtn = document.querySelector("#btn");
const messageDiv = document.querySelector("#message");
const beerImg = document.querySelector("img");

const allowToDrink = (age, country, drunk) => {
  // uk, poland, aus - 18 or older && usa - 21 or older

  if (age < 18) return false;
  if (age < 21 && country === "USA") return false;
  if (drunk >= 3) return false;

  return true;
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Remove the previous message & its background
  const newMessage = document.querySelector(".new");
  const successOrFailure = messageDiv.classList[1];
  if (newMessage) newMessage.remove();
  if (successOrFailure && messageDiv.className.includes("message--"))
    messageDiv.classList.remove(successOrFailure);

  const formData = new FormData(form);
  const { age, country, drunk } = Object.fromEntries(formData);

  const isAllowed = allowToDrink(age, country, drunk);
  const img = `./assets/${isAllowed ? "green_beer" : "red_beer"}.svg`;
  const message = isAllowed
    ? "Come in and have a beer"
    : "You can't have a beer";

  const para = document.createElement("p");
  const textNode = document.createTextNode(message);
  para.classList.add("new");
  para.appendChild(textNode);
  messageDiv.appendChild(para);

  beerImg.src = img;
  messageDiv.classList.add(`message--${isAllowed ? "success" : "failure"}`);
});
