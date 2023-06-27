import Card from "../Card";
import styles from "./CardList.module.scss";

const CardList = ({ planets }) => {
  // sort here, or sort in the return
  // const sortedPlanets = planets.sort((a, b) => a.diameterInKm - b.diameterInKm);

  return (
    // <section className={{ display: "flex", flexDirection: "column" }}>
    <section className={styles.container}>
      {planets
        .sort((a, b) => a.diameterInKm - b.diameterInKm)
        .map((planet, index) => {
          return <Card planet={planet} key={index} />;
        })}
    </section>
  );
};

export default CardList;
