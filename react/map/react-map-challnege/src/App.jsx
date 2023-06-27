import CardList from "./components/CardList";
import data from "./data.json";

function App() {
  // good idea to sort the data in the CardList component, not here!
  // const planets = data.sort((a, b) => a.diameterInKm - b.diameterInKm);
  return (
    <>
      <CardList planets={data} />
      {/* <CardList planets={planets} /> */}
    </>
  );
}

export default App;
