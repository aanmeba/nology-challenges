import { useState } from "react";
import styles from "./App.module.scss";
import "./App.css";
import LightMode from "./components/LightMode";
import DarkMode from "./components/DarkMode";

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
      {isDarkMode ? (
        <LightMode handleMode={handleMode} />
      ) : (
        <DarkMode handleMode={handleMode} />
      )}
      {/* <button className={handleBtnColor} onClick={handleMode}>
        {isDarkMode ? "Change to Light Mode" : "Change to Dark Mode"}
      </button> */}
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
