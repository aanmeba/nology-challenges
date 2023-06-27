import CardList from "./components/CardList";
import data from "./data.json";

function App() {
  const planets = data.sort((a, b) => a.diameterInKm - b.diameterInKm);
  return (
    <>
      <CardList planets={planets} />
    </>
  );
}

export default App;
