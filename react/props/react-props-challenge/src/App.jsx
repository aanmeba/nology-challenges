import Card from "./components/Card";
import CardList from "./components/CardList";
import Header from "./components/Header";

function App() {
  const albums = [
    {
      title: "Abbey Road",
      name: "The Beatles",
      imgUrl:
        "https://e.snmc.io/i/300/w/239574bd8490195d1b484f5c453846e8/6617288/The%20Beatles%20-%20Abbey%20Road%2C%20Cover%20art.webp",
      rating: "5",
    },
    {
      title: "The Velvet Underground & Nico",
      name: " The Velvet Underground & Nico",
      imgUrl:
        "https://e.snmc.io/i/300/w/f48f6805395346e5335b3c763a468ca8/6988068/The%20Velvet%20Underground%20%26%20Nico%20-%20The%20Velvet%20Underground%20%26%20Nico%2C%20Cover%20art.webp",
      rating: "4",
    },
    {
      title: "Pink Moon",
      name: "Nick Drake",
      imgUrl:
        "https://e.snmc.io/i/300/w/1da78338775190bb5df42a61eb2857b1/2509162/Nick%20Drake%20-%20Pink%20Moon%2C%20Cover%20art.webp",
      rating: "4",
    },
    {
      title: "Songs in the Key of Life",
      name: "Stevie Wonder",
      imgUrl:
        "https://e.snmc.io/i/300/w/8153a79eaf9126c6a9a5d42f49f6ac9f/7228470/Stevie%20Wonder%20-%20Songs%20in%20the%20Key%20of%20Life%2C%20Cover%20art.webp",
      rating: "5",
    },
    {
      title: "Elemental Soundtrack",
      name: "Thomas Newman",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAKkU64XYsxpSO39AoNyvhgr06m9-jj_vFchYIkqCBg&s",
      rating: "3",
    },
  ];
  return (
    <>
      <Header />
      <CardList>
        {albums.map((album) => {
          return (
            <Card
              key={album.title}
              title={album.title}
              name={album.name}
              rating={album.rating}
              imgUrl={album.imgUrl}
            />
          );
        })}
      </CardList>
    </>
  );
}

export default App;
