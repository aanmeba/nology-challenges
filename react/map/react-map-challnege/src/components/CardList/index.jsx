import Card from "../Card";
import styles from "./CardList.module.scss";

const CardList = ({ planets }) => {
  return (
    <section className={styles.container}>
      {planets.map((planet, index) => {
        return <Card planet={planet} key={index} />;
      })}
    </section>
  );
};

export default CardList;
