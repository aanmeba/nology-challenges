import { useState } from "react";
import styles from "./App.module.scss";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // true - dark mode
  // false - light mode
  const handleMode = () => {
    setIsDarkMode(!isDarkMode);
    // true -> currently dark
    document.body.className = isDarkMode ? styles.light : styles.dark;
  };

  const [randomNumber, setRandomNumber] = useState(0);

  const handleNumber = () => {
    const random = Math.floor(Math.random() * 1000);
    setRandomNumber(random);
  };

  const handleBtnColor = isDarkMode
    ? styles.button__dark
    : styles.button__light;

  return (
    <div className={styles.container}>
      <button className={handleBtnColor} onClick={handleMode}>
        {isDarkMode ? "Change to Light Mode" : "Change to Dark Mode"}
      </button>
      <button className={handleBtnColor} onClick={handleNumber}>
        Generate a random number
      </button>
      <div>
        <p>{randomNumber}</p>
        <p>{`The number is ${randomNumber % 2 ? "odd" : "even"}.`}</p>
      </div>
    </div>
  );
}

export default App;

// ## Challenge: Changing mode
// ### MVP
// Inside the App component, create a button that will allow you to toggle between light and dark mode of the page.
// -   When the mode is set to dark, the background should be dark, all text should be light and the button should say "Change to light mode".
// -   When the mode is set to light, the background should be light, all text should be dark and the button should say "Change to dark mode".
// ### BONUS
// Use SVG Icons for the button
// https://www.svgrepo.com/

// ## Challenge: Generating a random number
// ### MVP
// Inside the App component, add another button that will generate a random number between 0 and 100 when clicked.
// -   When the user clicks the button display the number on the page.
// -   If the generated number is even, render the following message: "The number is even." If its odd, render "The number is odd."
