import Card from "./components/Card";
import FlexCenter from "./components/FlexCenter";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <FlexCenter>
      <Header />
      <CardContainer>
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </FlexCenter>
  );
}

export default App;
